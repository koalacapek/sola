"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto w-full px-8">
        <div className="flex h-16 items-center justify-between">
          <span className="text-foreground font-serif text-2xl">Sola</span>
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#schedule"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Schedule
            </a>
            <a
              href="#classes"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Classes
            </a>
            <a
              href="#instructors"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Instructors
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
