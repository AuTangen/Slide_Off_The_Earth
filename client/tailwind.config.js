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
        'crowd-lg': "url('./assets/footer_background.png')",
        'crowd': "url('./assets/crowd_background.png')"
      }),
      backgroundSize: {
        'contain': 'contain',
      }
    }
  },
  plugins: [],
}

