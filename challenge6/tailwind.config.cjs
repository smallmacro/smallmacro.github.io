/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors:{
        voilet: "rgba(89, 100, 224, 1)",
        lightvoilet: "rgb(147,155,244)",
        darkblue: "rgb(25,32,45)",
        midnight: "rgb(18, 23, 33)",
        lightgray: "rgb(244,246,248)",
        gray: "rgb(157,174,194)",
        darkgray: "rgb(110,128, 152)",
        btnbggray: "rgba(89, 100, 224,0.1)",
        btnbgviolet: "rgba(89, 100, 224,0.35)",
        btnbgdarkmode: "rgba(255,255,255, 0.1)",
        btnbgdarkhover: "rgba(255,255,255, 0.35)",

      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
