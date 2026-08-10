import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────────────────────
// Système de design "Serene Clinical Identity"
// Source : design.md — Klara Wantiez | Psychologue
// Palette : Sauge douce · Terracotta · Sable · Albâtre · Charbon profond
// ─────────────────────────────────────────────────────────────────────────────
export default {
  // Analyse les fichiers Vue/TS pour purger les classes CSS inutilisées en prod
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],

  theme: {
    extend: {
      // ── Palette de couleurs ───────────────────────────────────────────────
      colors: {
        // Sauge douce — actions principales, présence de la marque (croissance, tranquillité)
        primary: {
          DEFAULT: '#4e635a',
          container: '#8da399',
          fixed: '#d1e8dd',
          'fixed-dim': '#b5ccc1',
        },
        'on-primary': '#ffffff',
        'on-primary-container': '#263932',
        'inverse-primary': '#b5ccc1',

        // Terracotta chaleureuse — accents, CTA secondaires (chaleur, ancrage)
        secondary: {
          DEFAULT: '#8d4e2d',
          container: '#fdaa83',
          fixed: '#ffdbcc',
          'fixed-dim': '#ffb693',
        },
        'on-secondary': '#ffffff',
        'on-secondary-container': '#783d1e',

        // Sable doux — arrière-plans subtils, séparateurs (hiérarchie visuelle douce)
        tertiary: {
          DEFAULT: '#725a41',
          container: '#b7997d',
        },
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#46311c',

        // Surfaces — couches tonales pour éviter les ombres lourdes
        surface: {
          DEFAULT: '#f7fafb',
          dim: '#d7dadb',
          bright: '#f7fafb',
          'container-lowest': '#ffffff',
          'container-low': '#f1f4f5',
          container: '#ebeeef',
          'container-high': '#e6e9ea',
          'container-highest': '#e0e3e4',
          variant: '#e0e3e4',
          tint: '#4e635a',
        },

        // Textes & contrastes
        'on-surface': '#181c1d',
        'on-surface-variant': '#424845',
        'inverse-surface': '#2d3132',
        'inverse-on-surface': '#eef1f2',

        // Contours (1px, faible contraste — style minimaliste)
        outline: '#727875',
        'outline-variant': '#c2c8c4',

        // États d'erreur
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
      },

      // ── Typographie ───────────────────────────────────────────────────────
      fontFamily: {
        // Literata → Titres : ton autoritaire, élégant, littéraire
        serif: ['Literata', 'Georgia', 'serif'],
        // Nunito Sans → Corps : doux, arrondi, accessible, non clinique
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Hiérarchie typographique complète du système de design
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '700' }],
        caption: ['12px', { lineHeight: '16px' }],
      },

      // ── Arrondis — langage formel "organique" ─────────────────────────────
      // Pas de coins vifs → évite l'aspect agressif ou trop formel
      borderRadius: {
        sm: '0.25rem',    // 4px — petits éléments (chips)
        DEFAULT: '0.5rem', // 8px — boutons, champs de saisie
        md: '0.75rem',    // 12px — cartes moyennes
        lg: '1rem',       // 16px
        xl: '1.5rem',     // 24px — grands conteneurs, cartes en vedette
        full: '9999px',   // Pilule (pill buttons, avatars)
      },

      // ── Conteneur principal (grille 12 colonnes, centré) ─────────────────
      maxWidth: {
        container: '1120px',
      },

      // ── Espacement rythmique (base 8px) ───────────────────────────────────
      // Rythme vertical généreux pour ne pas saturer l'utilisateur
      spacing: {
        'stack-sm': '1rem',   // 16px
        'stack-md': '2rem',   // 32px
        'stack-lg': '4rem',   // 64px
        'stack-xl': '6rem',   // 96px
      },

      // ── Ombres ambiantes ──────────────────────────────────────────────────
      // Très douces, basse opacité (#2D3132 à 5-8%) — "lift" organique
      boxShadow: {
        ambient: '0 4px 24px 0 rgba(45, 49, 50, 0.05)',
        'ambient-md': '0 6px 32px 0 rgba(45, 49, 50, 0.07)',
        'ambient-lg': '0 10px 48px 0 rgba(45, 49, 50, 0.09)',
      },
    },
  },

  // ── Safelist — classes générées dynamiquement (DomainCard.vue) ──────────────
  // Ces classes sont construites via computed() donc Tailwind ne peut pas les
  // détecter statiquement lors du tree-shaking de production (nuxt generate).
  safelist: [
    // Couleurs de titre des cartes de domaine
    'text-primary', 'text-secondary', 'text-tertiary',
    // Fonds des icônes de cartes
    'bg-primary/10', 'bg-secondary/10', 'bg-tertiary/10',
    // Puces colorées des listes de spécialités
    'bg-primary', 'bg-secondary', 'bg-tertiary',
  ],

  plugins: [],
} satisfies Config
