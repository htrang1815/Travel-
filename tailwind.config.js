/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-slider1": "url('/src/assets/images/auth/home-bg.jpg')",
        "bg-slider2": "url('/src/assets/images/slider/slider2.jpeg')",
        "bg-slider3": "url('/src/assets/images/slider/slider3.jpeg')",
        "bg-slider4": "url('/src/assets/images/slider/slider4.jpeg')",
        "bg-contact": "url('/src/assets/images/contact/bgcontact.jpg')",
        "bg-blog" : "url('/src/assets/images/blogs/bg-poster.jpeg')"
      },
    },
    colors: {
      primary: "#FFBC4B",
    },
  },
  plugins: [],
};
