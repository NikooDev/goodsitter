/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5d418d',
      },
      fontFamily: {
        opensans: ['Opensans']
      },
    },
  },
  plugins: [],
}
