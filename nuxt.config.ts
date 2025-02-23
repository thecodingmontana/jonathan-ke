// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    'shadcn-nuxt',
    'motion-v/nuxt',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'jonathan-color-mode',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  vite: {
    server: {
      allowedHosts: ['db60-102-220-169-7.ngrok-free.app'],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      'Geist': true,
      'Mona Sans': true,
      'Raleway': true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
