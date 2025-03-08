/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#D8D9DA',
        heading:"#8062D6"
      },
      fontSize:{
        primary:"1.5rem",
        secondary:"1.2rem"
      }
    },
  },
  plugins: [],
}
