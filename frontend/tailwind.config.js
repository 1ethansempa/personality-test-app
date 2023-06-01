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
        "light-primary": "rgba(255, 115, 92,0.5)",
        "dark-primary": "#f07865",
        secondary: "#385a64",
        "dark-white": "#f5f7f9",
        "mid-white": "#f5f5f5",
        "green-black": "#1a2e35",
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
