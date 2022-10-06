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
      colors: {
        primaryblue: "var(--primary-blue)",
        secondaryblue: "var(--secondary-blue)",
        warnred: "var(--warn-red)",
        blacktext: "var(--black-text)",
        graytext: "var(--gray-text)",
        blackbg: "var(--black-bg)",
        wholebg: "var(--whole-bg)",
        grayblue15: "var(--gray-blue-15)",
        grayblue25: "var(--gray-blue-25)",
        grayblue10: "var(--gray-blue-10)",
      },
      letterSpacing: {
        extrawide: "0.4rem",
      },
      backgroundImage: {
        "header-pattern": "url(./assets/home/bg-pattern-header.svg)",
        "footer-pattern": "url(./assets/home/bg-pattern-footer.svg)",
        "pricing-pattern": "url(./assets/home/bg-pattern-pricing.svg)",
        "side-pattern": "url(./assets/sign-up/bg-pattern-side.svg)",
        "arrow-down": "url(./assets/sign-up/icon-arrow-down.svg)",
        "icon-check": "url(./assets/sign-up/icon-check.svg)",
        "icon-cross": "url(./assets/sign-up/icon-cross.svg)",
      },
      boxShadow: {
        '3xl': '0 50px 50px -25px rgba(75, 92, 154, 0.247159)',
        'btn': '0px 25px 25px -10px rgba(63, 91, 194, 0.247159)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
