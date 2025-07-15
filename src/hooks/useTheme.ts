import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.classList.add("theme-ready");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");

    const audio = new Audio("/sounds/switch.mp3");
    audio.play().catch(() => {});
  };

  return { theme: mounted ? theme : "dark", toggleTheme, mounted };
}
