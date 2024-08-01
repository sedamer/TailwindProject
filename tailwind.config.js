/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        monto: ["Montserrat", "sans-serif"],
      },
      colors: {
        soft: "#D9ABAB",
        pinkish: "#C75B7A",
        blueish: "#004d5d ",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
