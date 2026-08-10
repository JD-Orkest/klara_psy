// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ─── Modules ─────────────────────────────────────────────────────────────────
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // ─── Google Fonts ─────────────────────────────────────────────────────────────
  // Literata (titres élégants) + Nunito Sans (corps de texte accessible)
  // preload: true → réduit le LCP en préchargeant les polices critiques
  googleFonts: {
    families: {
      Literata: {
        wght: [400, 500, 600],
        ital: [400],
      },
      'Nunito Sans': [400, 600, 700],
    },
    display: 'swap',    // Évite le FOUT (Flash Of Unstyled Text)
    preload: true,      // Précharge les polices → améliore le LCP
    prefetch: false,
    preconnect: true,
    subsets: ['latin'],
  },

  // ─── CSS Global ───────────────────────────────────────────────────────────────
  // Note : ne pas déclarer main.css ici car @nuxtjs/tailwindcss l'injecte via cssPath
  // css: ['~/assets/css/main.css'],

  // ─── Configuration de l'application ──────────────────────────────────────────
  app: {
    // 📌 DÉPLOIEMENT GITHUB PAGES :
    //    • Avec un repo nommé "klara-psy" → baseURL: '/klara-psy/'
    //    • Avec un domaine personnalisé (ex: klara-wantiez.be) → baseURL: '/'
    //    La variable d'environnement NUXT_APP_BASE_URL écrase cette valeur.
    //    Le workflow CI/CD (deploy.yml) injecte automatiquement cette variable.
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',

    head: {
      htmlAttrs: {
        lang: 'fr-BE', // Localisation belge francophone pour le SEO
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Couleur de la barre de navigation sur mobile (Material You)
        { name: 'theme-color', content: '#4e635a' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // ─── Tailwind CSS ─────────────────────────────────────────────────────────────
  // cssPath pointe vers notre fichier CSS custom (avec les composants .btn-*, .card-*)
  // Cela évite le message "Using default Tailwind CSS file"
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
  },

  // ─── Génération Statique (GitHub Pages) ──────────────────────────────────────
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // ─── Optimisations de performance ────────────────────────────────────────────
  experimental: {
    // Désactive l'extraction du payload pour réduire la taille du bundle JS
    payloadExtraction: false,
  },

  // ─── Date de compatibilité (Nuxt 3.12+, requis) ──────────────────────────────
  compatibilityDate: '2024-11-01',
})
