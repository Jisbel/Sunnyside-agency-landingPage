/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        //  Primary
        softRed: 'hsl(7, 99%, 70%)',
        gold: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyan :' hsl(167, 40%, 24%)',
        darkBlue : 'hsl(198, 62%, 26%)',
        viridian : 'hsl(168, 34%, 41%)',

        // Neutral
        charcoal: 'hsl(212, 27%, 19%)',
        cadet: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        fraunces700: ['Fraunces700', 'serif'],
        fraunces900: ['Fraunces900', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}