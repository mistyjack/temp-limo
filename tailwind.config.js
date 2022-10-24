/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: ['./**/*.tsx'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1264px",
      xl: "1600px",
    },
    fontFamily: {
      maz: ["Mazzard", "Helvetica", "Arial", "sans-serif"],
      als: ["'ALS Hauss'", "Helvetica", "Arial", "sans-serif"],
      vis: ["'Visuelt Pro'", "Helvetica", "Arial", "sans-serif"],
      int: ["Inter", "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        'primary': "#FCAF63",
        'primary-light': "#FFCB96",
        'primary-dark': "#CF9051",
        'txt-pry': "#101828",
        'txt-pry-dm': "#FCFCFC",
        'txt-sec': "#667085",
        'txt-sec-dm': "#9A9FA5",
        'bg-color': "#FCFCFC",
        'bg-color-dm': "#111315",
        'adaptive': "#595453"
      }
    },
  },
  plugins: [],
};
