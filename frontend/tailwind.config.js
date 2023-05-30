/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ff735c",
        "dark-primary": "#f07865",
        secondary: "#385a64",
        "dark-white": "#f2f2f2",
        "mid-white": "#f5f5f5",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    display: ["responsive"],
  },
  plugins: [],
};
