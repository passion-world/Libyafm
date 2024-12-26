// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0', // Default is 'localhost'
    port: 3000 // Optional, default is 3000
  },

  modules: ['@nuxtjs/tailwindcss']
});
