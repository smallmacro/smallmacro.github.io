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
        primaryblue: "var(--primary-blue)",
        secondaryblue:"var(--secondary-blue)",
        warnred: "var(--warn-red)",
        blacktext:"var(--black-text)",
        graytext:"var(--gray-text)",
        blackbg:"var(--black-bg)",
        wholebg:"var(--whole-bg)",
        grayblue15:"var(--gray-blue-15)",
        grayblue25:"var(--gray-blue-25)",
        grayblue10:"var(--gray-blue-10)",
      },
      letterSpacing:{
        extrawide: "0.4rem",
      },
      backgroundImage: {
        "header-pattern": "url(./assets/home/bg-pattern-header.svg)",
        "footer-pattern": "url(./assets/home/bg-pattern-footer.svg)",
        "pricing-pattern": "url(./assets/home/bg-pattern-pricing.svg)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
