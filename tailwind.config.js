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
      borderRadius: {
        10: "0.625rem",
      },
      fontSize: {
        "3.5xl": "2rem",
      },
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
        fleet: "#1A1D1F",
        grey: "#EAE9F2",
        footer: "#F9FAFB",
      },
      lineHeight: {
        50: "3.125rem",
        54: "3.375rem",
        57: "3.59375rem",
        60: "3.75rem",
        74: "4.625rem",
      },
      maxWidth: {
        250: "15.625rem",
        320: "20rem",
        348: "21.75rem",
        480: "30rem",
        560: "35rem",
        576: "36rem",
        768: "48.2rem",
        823: "51.4375rem",
      },
      minWidth: {
        250: "15.625rem",
        384: "24rem",
      },
      spacing: {
        56: "3.5rem",
        135: "8.4375rem",
        543: "33.9375rem",
        640: "40rem",
        700: "43.75rem",
      },
    },
  },
  plugins: [],
};
