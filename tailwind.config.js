/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: ["./**/*.tsx"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      maz: ["Mazzard", "Helvetica", "Arial", "sans-serif"],
      als: ["'ALS Hauss'", "Helvetica", "Arial", "sans-serif"],
      vis: ["'Visuelt Pro'", "Helvetica", "Arial", "sans-serif"],
      int: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        primary: "#FCAF63",
        "primary-light": "#FFCB96",
        "primary-dark": "#CF9051",
        "txt-pry": "#101828",
        "txt-pry-dm": "#FCFCFC",
        "txt-sec": "#667085",
        "txt-sec-dm": "#9A9FA5",
        "bg-color": "#FCFCFC",
        "bg-color-dm": "#111315",
        adaptive: "#595453",
        "fleet": "#1A1D1F",
      },
      lineHeight: {
        50: "3.125rem",
        54: "3.375rem",
        60: "3.75rem",
        74: "4.625rem",
      },
      maxWidth: {
        480: "30rem",
        560: "35rem",
        768: "48.2rem",
      },
      spacing: {
        56: "3.5rem",
        543: "33.9375rem",
        640: "40rem",
      },
    },
  },
  plugins: [],
};
