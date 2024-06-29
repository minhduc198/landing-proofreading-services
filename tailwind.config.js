/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "24px",
        lg: "100px",
        xl: "150px",
        "2xl": "150px",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: "transparent",
      primary: "#1BB275",
      secondary: "#102C5B",
      white: "#ffffff",
      black: "#333333",
      grey: "#999999",
      light: "#DDDDDDB5",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
