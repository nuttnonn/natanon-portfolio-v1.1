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
        primary: "#5928e5",
        primaryLight: "#834BFF",
        secondary: "#EF616D",
        light: "#FFF7E6",
        dark: "#000000",
      },
      boxShadow: {
        'profilePicture': '28px 20px rgba(0, 0, 0, 0.65)',
        'profilePictureXl': '24px 16px rgba(0, 0, 0, 0.65)',
        'profilePictureLg': '20px 12px rgba(0, 0, 0, 0.65)',
        'profilePictureSm': '16px 10px rgba(0, 0, 0, 0.65)',
      },
    },
    screens: {
      "2xl": {max: "1536px"},
      xl: {max: "1280px"},
      lg: {max: "1024px"},
      md: {max: "768px"},
      sm: {max: "640px"},
      xs: {max: "480px"},
    }
  },
  plugins: [],
}