/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        highlight:"#a100f2",
        textcolor:"#ffffff"
      }
    },
    
  },
  plugins: [],
}

