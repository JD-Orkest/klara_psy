<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// TheHeader.vue — Navigation principale sticky
// Comportement :
//   • Desktop : Logo + liens d'ancre + CTA "Prendre RDV"
//   • Mobile  : Logo + bouton hamburger → menu déroulant animé
// ─────────────────────────────────────────────────────────────────────────────

// État du menu mobile (fermé par défaut)
const isMobileMenuOpen = ref(false)

// Définition des liens de navigation (ancres vers les sections)
const navLinks = [
  { label: 'Présentation', href: '#presentation' },
  { label: 'Motifs', href: '#domaines' },
  { label: 'Infos Pratiques', href: '#infos-pratiques' },
  { label: 'Contact', href: '#contact' },
] as const

// Ferme le menu mobile après un clic sur un lien (UX fluide sur mobile)
function closeMenu() {
  isMobileMenuOpen.value = false
}

// Accessibilité : fermeture du menu avec la touche Échap
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMenu()
  }
}
</script>

<template>
  <!-- En-tête sticky — reste visible lors du défilement pour accès constant à la nav -->
  <!-- backdrop-blur-sm + bg-surface/95 → effet de verre dépoli professionnel -->
  <header
    class="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface/95 backdrop-blur-sm"
    role="banner"
    @keydown="handleKeyDown"
  >
    <div class="container-klara">
      <div class="flex h-16 items-center justify-between md:h-20">

        <!-- ── Logo / Identité de marque ─────────────────────────────────── -->
        <a
          href="#"
          class="group flex items-center gap-3 leading-none
                 focus-visible:rounded focus-visible:outline-2
                 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Klara Wantiez – Psychologue, retour en haut de page"
        >
          <!-- Favicon SVG affiché comme logo dans le header -->
          <img
            src="/favicon.svg"
            alt=""
            width="36"
            height="36"
            aria-hidden="true"
            class="shrink-0 transition-opacity group-hover:opacity-80"
          />
          <!-- Texte : nom + titre -->
          <span class="flex flex-col">
            <span class="font-serif text-[18px] font-semibold text-on-surface
                         transition-colors group-hover:text-primary">
              Klara Wantiez
            </span>
            <span class="font-sans text-caption text-on-surface-variant tracking-wide">
              Psychologue
            </span>
          </span>
        </a>

        <!-- ── Navigation Desktop (masquée sur mobile) ────────────────────── -->
        <nav
          class="hidden items-center gap-7 md:flex"
          aria-label="Navigation principale"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="font-sans text-body-md text-on-surface-variant
                   transition-colors duration-150 hover:text-primary
                   focus-visible:rounded focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {{ link.label }}
          </a>

          <!-- Bouton CTA principal "Prendre RDV" -->
          <a
            href="https://rosa.be/fr/hp/klara-wantiez/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary !py-2.5 !text-[12px]"
            aria-label="Prendre rendez-vous sur ROSA.be (ouvre un nouvel onglet)"
          >
            Prendre RDV
          </a>
        </nav>

        <!-- ── Bouton hamburger (Mobile uniquement) ───────────────────────── -->
        <button
          type="button"
          class="flex size-10 items-center justify-center rounded-md text-on-surface
                 transition-colors hover:bg-surface-container md:hidden"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <!-- Icône hamburger (3 barres → croix) inline SVG pour 0 requête HTTP -->
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <Transition
              enter-active-class="transition-opacity duration-150"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
              mode="out-in"
            >
              <!-- Icône hamburger -->
              <path
                v-if="!isMobileMenuOpen"
                key="open"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
              <!-- Icône croix -->
              <path
                v-else
                key="close"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </Transition>
          </svg>
        </button>

      </div>
    </div>

    <!-- ── Menu Mobile — panneau déroulant animé ──────────────────────────── -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="border-t border-outline-variant bg-surface px-5 py-4 md:hidden"
        aria-label="Menu de navigation mobile"
      >
        <ul class="flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-md px-3 py-2.5 font-sans text-body-md text-on-surface
                     transition-colors hover:bg-surface-container hover:text-primary"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>

          <!-- Séparateur + CTA mobile -->
          <li class="mt-3 border-t border-outline-variant pt-3">
            <a
              href="https://rosa.be/fr/hp/klara-wantiez/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary w-full"
              @click="closeMenu"
            >
              Prendre rendez-vous sur ROSA
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
