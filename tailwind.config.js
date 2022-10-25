/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundColor: {
        "mainPurple" : "#344675",
      },
      colors: {
        "textPurple": "#344675",
      },
      borderRadius: {
        "3xl": "3rem",
      }
    },
  },
  plugins: [],
}