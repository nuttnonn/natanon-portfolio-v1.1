/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        light: "#f3f2f9",
        primary: "#2b2b33",
        darkPurple: "#616173",
        lightPurple: "#aab2d1",
        ocean: "#38a3a5",
        gray: "#adb5bd",
      },
    },
  },
  plugins: [],
}
