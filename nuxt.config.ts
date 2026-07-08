// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-auth-utils',
    'vuetify-nuxt-module',
    '@nuxt/test-utils/module',
  ],

  googleFonts: {
    families: {
      "Cinzel Decorative": true
    }
  },

  i18n: {
    defaultLocale: 'ja',
    locales: [
      { code: 'ja', name: '日本語', file: 'ja.json' }
    ]
  }
})