/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#750923",
          dark: "#5E061F",
          light: "#EDC5C8",
        },
        foreground: "#2B131F",
        accent: "#F7DFE0",
        muted: "#F0E2E2",
        destructive: "#A92737",
        border: "#EEDCDB",
        card: "#FBF7F4",
        background: "#FAF7F4",
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "8px",
      }
    },
  },
  plugins: [],
}
