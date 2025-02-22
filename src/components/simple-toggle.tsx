"use client"

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function SimpleToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-4 bg-hotpink flex justify-center items-center bg-foreground text-background rounded-full cursor-pointer"
    >
      <IconSun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <IconMoon className="h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </div>
  );
}
