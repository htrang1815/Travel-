/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg-slider1': "url('/src/assets/images/auth/home-bg.jpg')",
      },
    },
    colors: {
      primary:"#FFBC4B",
      
    }
  },
  plugins: [],
}
