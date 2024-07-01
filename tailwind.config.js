/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '1024px',
      'lg': '1280px',
    },
    extend: {
      backgroundImage:{
        hero:"public\assets\robert-mathews-xXaLfz6V9rQ-unsplash.jpg"
      }
    },
  },
  plugins: [],
}