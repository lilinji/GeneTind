"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-zinc-200/60 dark:border-white/10" />
    );
  }

  return (
    <button
      aria-label="Toggle visual theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-100/80 text-zinc-700 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-emerald-600" />
      )}
    </button>
  );
};

export default ThemeToggler;
