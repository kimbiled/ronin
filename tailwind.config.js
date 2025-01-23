/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm20': '320px',  // Для экранов шириной от 320px
        'sm75': '375px', // Для экранов шириной от 375px
        'sm25': '425px', // Для экранов шириной от 425px
        'xl40': '1440px'
    },
    },
  },
  plugins: [],
};
