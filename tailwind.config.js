/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: {
        light: "#23303D",
        base: "#000000"
      },
      white: '#ffffff',
      grey: {
        light: "#f0f1f4",
        dark: "#ddddde"
      },
      blue: "#2C64F4"
    },
    extend: {},
  },
  plugins: [],
}
