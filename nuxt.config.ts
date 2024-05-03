// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxt/eslint',
    '@nuxtjs/seo',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  ogImage: {
    enabled: false,
  },
  site: {
    indexable: false,
    url: 'https://www.bluebirdbigband.de',
    name: 'Blue Bird Big Band',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'de',
  },
  css: ['~/assets/css/main.css'],
})
