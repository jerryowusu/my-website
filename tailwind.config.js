/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Kaushan: ['Kaushan Script'],
    },
    extend: {
      colors: {
        indigo: {
          light: '#b3bcfd',
          default: '#5c6ac4',
          dark: '#202e78'
        }
      }
    },
  },
  plugins: [],
}
