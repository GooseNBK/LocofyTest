/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colour-secondary-white-100-general": "#fff",
        lavender: "#e7ecff",
        "colour-main-blue-300": "#929ecc",
        lightgray: "#cdd1d4",
        "colour-main-blue-800": "#111b47",
        "colour-logo-primary": "#37447e",
        "colour-main-grey-400": "#939ea4",
        "colour-main-grey-600": "#5d6970",
        "colour-main-blue-700": "#222f65",
        "colour-main-blue-400": "#6f7cb2",
        "colour-main-blue-900": "#091133",
        black: "#000",
        "colour-main-blue-500": "#505f98",
        "colour-background-light-grey": "#fbfbfd",
        "colour-secondary-yellow-500": "#ffd166",
        "colour-logo-primary1": "#2246e3",
      },
      spacing: {},
      fontFamily: {
        "regular-14": "Roboto",
      },
      borderRadius: {
        "7xl-5": "26.5px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "7xl": "26px",
      "2xl": "21px",
      base: "16px",
      "31xl": "50px",
      "21xl": "40px",
      "11xl": "30px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
