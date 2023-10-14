/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      volna: 'rgba(46, 236, 197, 1)',
      black: '#000000',
      white: 'rgba(255, 255, 255)',
      lighty: 'rgba(46, 236, 197, 0.1)',
      bluety: 'linear-gradient(139.56deg, #527791 10.06%, #325597 53.72%, #193895 88%)',
      gray: 'rgb(3 7 18)',
      blesed: 'linear-gradient(90deg, #2AF598 20%, #009EFD 80%)',
  
       



    }
  },
  plugins: [
    require('flowbite')
  ],
}
