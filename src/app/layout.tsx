import "@/styles/globals.css";

import { type Metadata } from "next";
import { Crimson_Text, Geist, Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Sola - Where wellness meets excellence",
  description:
    "Book transformative Pilates classes with world-class instructors in our premium studio.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimson.variable} antialiased`}
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
