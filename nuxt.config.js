export default defineNuxtConfig({
  buildModules: ["@nuxt/image", "@averjs/nuxt-compression", 'nuxt-delay-hydration',],
  css: ["@/assets/css/main.css", "@/assets/font/stylesheet.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
    modules: [
      'vue3-carousel-nuxt',
      '@nuxtjs/html-validator',
      '@vite-pwa/nuxt',
      'nuxt-aos',
      'nuxt-swiper'
    ],
    carousel: {
      prefix: 'MyPrefix'
    },
  },
  delayHydration: {
    mode: 'mount'
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL
  },
  app: {
    layoutTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  nitro: {
    compressPublicAssets: true,
  },

});
