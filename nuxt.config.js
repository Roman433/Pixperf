export default defineNuxtConfig({
  buildModules: ["@nuxt/image", "@averjs/nuxt-compression", 'nuxt-delay-hydration',],
  css: ["@/assets/css/main.css", "@/assets/font/stylesheet.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
    modules: [
      'vue3-carousel-nuxt'
    ],
    carousel: {
      prefix: 'MyPrefix'
    },
  },
  delayHydration: {
    mode: 'mount'
  }
});
