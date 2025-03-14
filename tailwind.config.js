/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-link': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'eco': {
          50: '#f3f9e8',
          100: '#e5f2d1',
          200: '#cce6a8',
          300: '#b2d97f',
          400: '#99cd56',
          500: '#7fb72d',
          600: '#659223',
          700: '#4c6e1a',
          800: '#324910',
          900: '#192508',
        },
        'earth': {
          50: '#f7f9f9',
          100: '#e7eeef',
          200: '#c5d5d8',
          300: '#a3bcc1',
          400: '#81a3aa',
          500: '#5f8a93',
          600: '#4c6e76',
          700: '#395258',
          800: '#26373b',
          900: '#131b1d',
        },
      },
    },
  },
  plugins: [],
} 