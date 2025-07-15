"use client";
import { createContext, useContext, ReactNode } from "react";
import { useTheme as useThemeHook } from "@/hooks/useTheme";

const ThemeContext = createContext<ReturnType<typeof useThemeHook> | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeContext = useThemeHook();

  if (!themeContext.mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
