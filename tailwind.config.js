const colors = require('tailwindcss/colors')

const sans = ['Arial', 'Helvetica Neue', 'sans-serif'];
const serif = ['Times New Roman', 'Courier', 'serif'];

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Dosis', ...sans],
      'serif': ['Courier Prime', ...serif ],
      'mono': ['Courier Prime', ...serif ],
      'display': ['Dosis', ...sans],
      'body': ['Dosis', ...sans]
    },
    colors: {
      transparent: 'transparent',
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      emerald: colors.emerald,
      green: colors.green,
      blue: colors.blue,
      purple: {
          "400": "#794c8b",
          "500": "#411e5a",
          "600": "#2e183b"
      },
      orange: {
          "400": "#ffb200",
          "500": "#f0462d"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
