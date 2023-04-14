// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "@/assets/font/stylesheet.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

      
    },
    
  },
  modules: [
    ['nuxt-swiper', {
     
    }],
    
  ]
});
