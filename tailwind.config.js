/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img1: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
      },
      colors:{
        primary: '#fea928',
        secondary: '#ed8900',
        footer:'#0c163b'
      },
      container:{
        center: true,
        padding:{
          DEFAULT : "1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}