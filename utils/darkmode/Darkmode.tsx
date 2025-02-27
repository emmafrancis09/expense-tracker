"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="fixed top-0 right-0 p-4">
      <button type="button" onClick={() => toggleTheme()}>
        {theme === "dark" ? (
          <Sun className="cursor-pointer" />
        ) : (
          <Moon className="cursor-pointer" />
        )}
      </button>
    </div>
  );
}
