/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Syne: ["Syne", "sans-serif"],
        Heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        purple: "#b993d6",
        sky: "#8ca6db",
      },
    },
  },
  plugins: [],
};
