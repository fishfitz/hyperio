// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  app: {
    head: {
      title: 'Hyperio',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        { rel: "icon", type:"image/png", href: "/favicon-96x96.png", sizes:"96x96"},
        { rel: "icon", type:"image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", type:"/favicon.ico" },
        { rel: "apple-touch-icon", type:"180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", type:"/site.webmanifest" }
      ]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['sanitize.css/sanitize.css', '~/assets/css/main.css'],

  fonts: {
    families: [{ name: 'Tomarik Poster', provider: 'local' }]
  },

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
    },
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ]
  }
})