/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    fontFamily: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
    extend: {},
  },
  plugins: [],
  //important: true, // for overriding the material default style
};
