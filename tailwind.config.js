/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hero:"public\assets\robert-mathews-xXaLfz6V9rQ-unsplash.jpg"
      }
    },
  },
  plugins: [],
}