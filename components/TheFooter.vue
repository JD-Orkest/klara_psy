<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// TheFooter.vue — Pied de page
// Structure : 4 colonnes (Identité · Navigation · Contact · Légal)
// ─────────────────────────────────────────────────────────────────────────────

// Année courante calculée dynamiquement (pas de maintenance nécessaire)
const currentYear = new Date().getFullYear()

// Liens de navigation du footer
const navLinks = [
  { label: 'Présentation', href: '#presentation' },
  { label: 'Motifs de consultation', href: '#domaines' },
  { label: 'Infos Pratiques', href: '#infos-pratiques' },
  { label: 'Contact', href: '#contact' },
]

// Liens légaux
const legalLinks = [
  { label: 'Mentions Légales', href: '#mentions-legales', external: false },
  { label: 'Politique de Confidentialité', href: '#confidentialite', external: false },
  { label: 'ROSA.be', href: 'https://www.rosa.be', external: true },
]
</script>

<template>
  <!-- Pied de page — fond Charbon Profond (#2d3132) pour contraste et autorité -->
  <footer
    class="border-t border-outline-variant bg-inverse-surface"
    role="contentinfo"
    aria-label="Pied de page — Klara Wantiez Psychologue"
  >
    <div class="container-klara py-12 lg:py-16">

      <!-- ── Grille principale 4 colonnes ──────────────────────────────────── -->
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <!-- Colonne 1 : Identité & branding -->
        <div class="lg:col-span-1">
          <p class="font-serif text-headline-sm text-inverse-on-surface">
            Klara Wantiez
          </p>
          <p class="mt-1 font-sans text-body-md text-inverse-on-surface/70 leading-relaxed">
            Psychologue Clinicienne<br>
            Infanto-Juvénile
          </p>
          <p class="mt-3 font-sans text-caption text-inverse-on-surface/50">
            Centre Pluridisciplinaire de l'Image<br>
            Anderlues, Belgique
          </p>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div>
          <p
            class="mb-4 font-sans text-label-md tracking-[0.1em] uppercase
                   text-inverse-on-surface/50"
          >
            Navigation
          </p>
          <nav aria-label="Navigation secondaire dans le pied de page">
            <ul class="space-y-2.5" role="list">
              <li v-for="link in navLinks" :key="link.href">
                <a
                  :href="link.href"
                  class="font-sans text-body-md text-inverse-on-surface/80
                         transition-colors hover:text-inverse-on-surface"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Colonne 3 : Coordonnées de contact -->
        <div>
          <p
            class="mb-4 font-sans text-label-md tracking-[0.1em] uppercase
                   text-inverse-on-surface/50"
          >
            Contact
          </p>
          <!-- address sémantique pour les coordonnées physiques et numériques -->
          <address class="not-italic space-y-2.5 font-sans text-body-md">
            <p>
              <!-- mailto: → ouvre l'application mail sur mobile/desktop -->
              <a
                href="mailto:klara.wantiez@outlook.com"
                class="text-inverse-on-surface/80 transition-colors
                       hover:text-inverse-on-surface"
                aria-label="Envoyer un email à Klara Wantiez"
              >
                klara.wantiez@outlook.com
              </a>
            </p>
            <p>
              <!-- tel: → déclenche l'appel téléphonique sur mobile -->
              <a
                href="tel:+32478170881"
                class="text-inverse-on-surface/80 transition-colors
                       hover:text-inverse-on-surface"
                aria-label="Appeler Klara Wantiez au +32 478 17 08 81"
              >
                +32 478 17 08 81
              </a>
            </p>
            <!-- AddressOpener → clic = choix Google Maps / Plans / Waze -->
            <p>
              <UiAddressOpener
                address="Rue de l'Image 12, 6150 Anderlues, Belgique"
                popover-position="top"
              >
                <span class="text-inverse-on-surface/50 leading-relaxed hover:text-inverse-on-surface/80 transition-colors">
                  Rue de l'Image 12<br>
                  6150 Anderlues, Belgique
                </span>
              </UiAddressOpener>
            </p>
          </address>
        </div>

        <!-- Colonne 4 : Liens légaux -->
        <div>
          <p
            class="mb-4 font-sans text-label-md tracking-[0.1em] uppercase
                   text-inverse-on-surface/50"
          >
            Informations
          </p>
          <nav aria-label="Liens légaux">
            <ul class="space-y-2.5" role="list">
              <li v-for="link in legalLinks" :key="link.href">
                <a
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                  class="font-sans text-body-md text-inverse-on-surface/80
                         transition-colors hover:text-inverse-on-surface"
                >
                  {{ link.label }}
                  <!-- Indicateur visuel d'ouverture dans un nouvel onglet -->
                  <span
                    v-if="link.external"
                    class="ml-0.5 text-inverse-on-surface/40"
                    aria-hidden="true"
                  >↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>

      <!-- ── Ligne de copyright ─────────────────────────────────────────────── -->
      <div
        class="mt-10 border-t border-inverse-on-surface/10 pt-6 text-center"
      >
        <p class="font-sans text-caption text-inverse-on-surface/40">
          © {{ currentYear }} Klara Wantiez. Tous droits réservés.
          · Site par
          <a
            href="https://www.linkedin.com/in/julien-deprez-5005a7253/"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors hover:text-inverse-on-surface/70 underline underline-offset-2"
            aria-label="Julien Deprez, développeur web — profil LinkedIn"
          >Julien Deprez</a>
        </p>
      </div>

    </div>
  </footer>
</template>
