/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}'
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
          "pgh-gold":"#af996e",
          "pgh-black" :"#030303",
          "pgh-white" :"#ECECEC",
          "pgh-gray" : "#1e1e1e"
      },

      fontFamily: {
        zodiak: ["zodiak", "serif"],
        bdo: ["bdo", "sans-serif"],
        sans:["bdo","sans-serif"]
      },
    },
  },
}