import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  alias: {
    '@': resolve(__dirname, './')
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
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
  },
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/global.css' }
      ]
    }
  }
})
