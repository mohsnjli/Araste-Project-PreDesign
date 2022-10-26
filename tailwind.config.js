/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-mainBlue": "#102a43",
        "dark-primaryBlue": "#334e68",
        "dark-secondaryBlue": "#486581",
      },
      colors: {
        "textPurple": "#344675",
      },
      borderRadius: {
        "3xl": "3rem",
      },
      width: {
        "iconW": "30px",
      },
      height: {
        "iconH" : "30px",
      },
    },
  },
  plugins: [],
}