import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26acd0",
        "white-light": "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        jetbrains: ["Google Sans Code", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
