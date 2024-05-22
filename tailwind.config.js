/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#232828",
        "gray-50": "#323838",
        "gray-100": "#DFCCCC",
        "gray-500": "#2E2E2E",
        "primary-100": "#232828",
        "primary-300": "#E14A00",
        "primary-500": "#FB8C00",
        "secondary-400": "#FF5500",
        "secondary-500": "#FFA726",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FB8C00 0%, #FFC837 100%)", // Orange to Yellow gradient
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
