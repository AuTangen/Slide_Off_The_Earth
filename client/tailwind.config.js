/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    backgroundImage: ['responsive'],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'crowd': "url('./assets/footer_background.png')"
      }),
      backgroundSize: {
        'contain': 'contain',
      }
    }
  },
  plugins: [],
}

