/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colour-secondary-white-100-general": "#fff",
        "colour-logo-primary": "#37447e",
        lightgray: "#cdd1d4",
        "colour-main-blue-300": "#929ecc",
        "colour-main-grey-400": "#939ea4",
        "colour-main-blue-800": "#111b47",
        lavender: "#e7ecff",
        "colour-main-blue-900": "#091133",
        "colour-main-blue-400": "#6f7cb2",
        "colour-main-blue-700": "#222f65",
        "colour-main-grey-600": "#5d6970",
        "colour-main-blue-500": "#505f98",
        "colour-background-light-grey": "#fbfbfd",
        black: "#000",
        "colour-logo-primary1": "#2246e3",
        gray: "#787878",
        "colour-secondary-yellow-500": "#ffd166",
      },
      spacing: {},
      fontFamily: {
        "bold-26": "Roboto",
      },
      borderRadius: {
        "7xl-5": "26.5px",
      },
    },
    fontSize: {
      "7xl": "26px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      base: "16px",
      "31xl": "50px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};