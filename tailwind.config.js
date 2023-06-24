/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'coper': "url('../public/coper-background.png')"
      },
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
        'coperHeader': ['Audiowide', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        copertheme: {
          "primary": "#ffc72c",
          "secondary": "#171e33",
          "accent": "#fef08a",
          "neutral": "#171e33",
          "base-100": "#212b49",
          "info": "#8ba9ee",
          "success": "#65a30d",
          "warning": "#f59e0b",
          "error": "#f15b6c",
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

