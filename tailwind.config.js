/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/how-it-works.html',
    './src/how-it-works copy.html',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          800: '#222',
        },
        sky: {
          400: '#7AC3FF',
          500: '#239BFF',
        },
        zinc: {
          500: '#808080',
        },
        green: {
          500: '#6FC07C',
        },
        slate: {
          100: '#F5F6FA',
        },
        gray: {
          100: '#F1F1F3',
        },
      },
    },
  },
  plugins: [],
}
