/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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
        bgmodal: "rgba(0,0,0, 0.5)",
        darkblueop10: "rgba(25,32,45,0.1)",
        darkblueop50: "rgba(25,32,45,0.5)",
        whiteop10: "rgba(0,0,0, 0.1)",
        darkgrayop20: "rgba(110,128, 152, 0.2)",


      },
      backgroundImage:{
        "mobile-header": "url('./assets/mobile/bg-pattern-header.svg')",
        "tablet-header": "url('./assets/tablet/bg-pattern-header.svg')",
        "desktop-header": "url('./assets/desktop/bg-pattern-header.svg')",
        "icon-sun": "url('./assets/desktop/icon-sun.svg')",
        "icon-moon": "url('./assets/desktop/icon-moon.svg')",
        "icon-check": "url('./assets/desktop/icon-check.svg')",
        "icon-filter": "url('./assets/mobile/icon-filter.svg')",
        "icon-search": "url('./assets/desktop/icon-search.svg')",
        "icon-location": "url('./assets/desktop/icon-location.svg')",
        
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: 'class', //manually monitor the preference
}
