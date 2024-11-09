/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        softGray:"#9194A1",
        softRed:"#FA5757",
        softBlue:"#5269DF"
      },
      maxWidth:{
       "screen-1440": '1440px'
      },
      fontFamily:{
        rubik:['Rubik','sans-serif']
      }
    },
  },
  plugins: [],
}

