const { background } = require('storybook/internal/theming');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F8F8F8',
          300: '#F1F2F8'
        },
        contrast: {
          DEFAULT: '#000000'
        },
        primary: {
          DEFAULT: '#FFE4C7'
        }
      }
    }
  },
  plugins: [],
  
}

