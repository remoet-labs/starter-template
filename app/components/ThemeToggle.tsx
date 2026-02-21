"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  if (!mounted) return <div className="w-[36px] h-[36px]" />;

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="p-2 rounded-md hover:bg-card transition-colors cursor-pointer"
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
