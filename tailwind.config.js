/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: "#ffffff",
          secondary: "#f3f4f6",
          text: "#1f2937",
        },
        // Dark mode colors
        dark: {
          primary: "#1f2937",
          secondary: "#111827",
          text: "#f3f4f6",
        },
      },
      boxShadow: {
        "3d": "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
