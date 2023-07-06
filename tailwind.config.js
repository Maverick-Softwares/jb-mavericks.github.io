/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "Sans-Serif"],
        Poppins: ["Poppins", "Sans-Serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
  //important: true, // for overriding the material default style
};
