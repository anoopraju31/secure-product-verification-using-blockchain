/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
            DEFAULT: '#10B981',
            light: '#D1FAE5'
        }
      },
    },
    screens: {
      'sm': '320px',
      'md': '750px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'

    },
  },
  plugins: [
   // require('tailwind-scrollbar'),
  ],
}