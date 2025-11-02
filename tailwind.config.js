/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#386641", 700: "#2e5236" },
        brand2: { DEFAULT: "#6A994E" },
        accent: { DEFAULT: "#A7C957" }
      },
      fontFamily: {
        display: ["Lexend", "ui-sans-serif", "system-ui"],
        sans: ["Arimo", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        card: "0 6px 24px -12px rgba(0,0,0,.15)"
      }
    }
  },
  plugins: []
};