/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ["class"],
  theme: {

    extend: {
      gradientColorStops: {
        "darkBlue": {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
        },
      },
      backgroundColor: {
        "darkBlue": {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
        },
      },
      borderColor: {
        "darkBlue": {
          900: "#102a43",
        },
      },
      colors: {
        "darkBlue": {
          900: "#102a43",

        },
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.15)'
      },

      borderRadius: {
        "3xl": "3rem",
      },
      width: {
        "iconW": "30px",
      },
      height: {
        "iconH": "30px",
      },
    },
  },

  plugins: [
    // ...
    require('tailwind-scrollbar')({
      nocompatible: true
    }),
  ],
}