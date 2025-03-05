// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID
    }
  },
  ui: {
    global: true,
    icons: ['heroicons']
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  }
})