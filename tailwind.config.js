/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:["14px"],
      },
      colors:{
        starGreen:'#D4E9E2',
        darkGreen:'#1E3932',
        starpink:'#EFC6CC',
      }
    },
  },
  plugins: [],
}
