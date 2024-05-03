// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fontawesome: {
    icons: {
      solid: ['close', 'bars'],
    },
  },
  css: ['~/assets/css/main.css'],
})
