/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#E09E00",
        purple: "#8663FF",
        lightpurple: "#BEABFF",
        grey: "#666666",
        lightgrey: "#B2B2B2",
        buttonpurple: "#d2c3f5",
        darkpurple: "#8562FE"

      },
      maxWidth: {
        xxlScreen: '2000px'
      },
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
