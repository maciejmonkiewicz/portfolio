"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <span className="text-neutral-900 dark:text-neutral-300 text-sm cursor-pointer hover:underline ">
      {theme === "dark" ? (
        <p
          onClick={() => setTheme("light")}
          className="flex gap-2 items-center"
        >
          Set light mode <Sun className="size-4" />
        </p>
      ) : (
        <p onClick={() => setTheme("dark")} className="flex gap-2 items-center">
          Set dark mode <Moon className="size-4" />
        </p>
      )}
    </span>
  );
}
