import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/server/db";
import { env } from "@/env";
import { TRPCError } from "@trpc/server";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  secret: env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ session, user }) {
      const [googleAccount] = await db.account.findMany({
        where: {
          userId: user.id,
          provider: "google",
        },
      });

      if (
        googleAccount?.expires_at &&
        googleAccount.expires_at * 1000 < Date.now()
      ) {
        try {
          const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: env.AUTH_GOOGLE_CLIENT_ID,
              client_secret: env.AUTH_GOOGLE_CLIENT_SECRET,
              grant_type: "refresh_token",
              refresh_token: googleAccount.refresh_token!,
            }),
          });

          const tokensOrError: {
            access_token: string;
            expires_in: number;
            refresh_token?: string;
          } = (await response.json()) as {
            access_token: string;
            expires_in: number;
            refresh_token?: string;
          };

          if (!response.ok)
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
            });

          const newTokens = tokensOrError;

          await db.account.update({
            data: {
              access_token: newTokens.access_token,
              expires_at: Math.floor(Date.now() / 1000 + newTokens.expires_in),
              refresh_token:
                newTokens.refresh_token ?? googleAccount.refresh_token,
            },
            where: {
              provider_providerAccountId: {
                provider: "google",
                providerAccountId: googleAccount.providerAccountId,
              },
            },
          });
        } catch (error) {
          console.error("Error refreshing access_token", error);
          return {
            ...session,
            user: { ...session.user, id: user.id },
            error: "RefreshTokenError" as const,
          };
        }
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      } as const;
    },
  },
} satisfies NextAuthConfig;
