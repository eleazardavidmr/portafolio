import typography from "@tailwindcss/typography";

// Los colores apuntan a variables CSS definidas en src/index.css,
// así cada token cambia solo entre modo claro y oscuro.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: token("accent"),
        "on-primary": token("on-accent"),
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        label: token("label"),
        "label-2": token("label-2"),
        "label-3": token("label-3"),
        separator: token("separator"),
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        inter: ["Inter", "system-ui", "sans-serif"],
        jetbrains: ["Google Sans Code", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "71.25rem",
      },
    },
  },
  plugins: [typography],
};
