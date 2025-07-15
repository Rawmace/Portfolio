import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-zinc-800/10 dark:hover:bg-white/10 transition-colors sm:p-2.5"
      whileTap={{ scale: 0.85 }}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
      ) : (
        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
