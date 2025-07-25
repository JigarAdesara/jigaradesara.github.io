"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme !== "dark" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black" />
      ) : (
        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
