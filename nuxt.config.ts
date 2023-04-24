export default defineNuxtConfig({
  buildModules: ["@nuxt/image", "@averjs/nuxt-compression"],
  css: ["@/assets/css/main.css", "@/assets/font/stylesheet.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
