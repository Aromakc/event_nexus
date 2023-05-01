/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1270b0',
        secondary: '#0d286e',
        background: '#f8f7ee',
        gray: '#767676',
        red: '#e63946',
      },
    },
  },
  plugins: [],
};
