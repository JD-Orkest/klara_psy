<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// CTA.vue — Section d'appel à l'action final "Prêt(e) à commencer ?"
// Design : Fond Sauge clair (#d1e8dd) pour un CTA lumineux et bienveillant
// Contenu : Titre · Description · Bouton ROSA · 3 blocs de contact rapide
// ─────────────────────────────────────────────────────────────────────────────

// Contacts "email" et "téléphone" — adresse gérée séparément via AddressOpener
const contactItems = [
  {
    id: 'email',
    label: 'Email',
    value: 'klara.wantiez@outlook.com',
    // mailto: → ouvre automatiquement l'application mail sur mobile
    href: 'mailto:klara.wantiez@outlook.com',
  },
  {
    id: 'phone',
    label: 'Téléphone',
    value: '+32 473 17 06 94',
    // tel: → déclenche l'appel téléphonique sur mobile
    href: 'tel:+32473170694',
  },
] as const
</script>

<template>
  <!-- ══════════════════════════════════════════════════════════════════════
       Section CTA Final — "Prêt(e) à commencer ?"
       Fond primary-fixed (#d1e8dd = Sauge très clair) pour un impact
       bienveillant et mémorable avant le pied de page
       ══════════════════════════════════════════════════════════════════════ -->
  <section
    class="bg-primary-fixed py-20 lg:py-32"
    aria-labelledby="cta-title"
  >
    <div class="container-klara text-center">

      <!-- Titre principal de l'appel à l'action -->
      <h2
        id="cta-title"
        class="font-serif text-display-mobile font-semibold
               text-on-surface lg:text-display-lg"
      >
        Prêt(e) à commencer&nbsp;?
      </h2>

      <!-- Description rassurante et invitante -->
      <p class="mx-auto mt-5 max-w-xl font-sans text-body-lg text-on-surface-variant">
        Pour toute question ou demande d'information, n'hésitez pas à me
        contacter ou à réserver directement votre première séance.
      </p>

      <!-- Bouton CTA principal — Terracotta pour l'émotion et l'action -->
      <div class="mt-8">
        <a
          href="https://rosa.be/fr/hp/klara-wantiez/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
          aria-label="Prendre rendez-vous sur ROSA.be (ouvre un nouvel onglet)"
          
        >
          Prendre RDV sur ROSA.be
        </a>
      </div>

      <!-- Séparateur avec texte "ou contactez-moi directement" -->
      <div class="relative my-10 flex items-center gap-4 max-w-xs mx-auto">
        <div class="flex-1 h-px bg-on-surface/10"></div>
        <span class="font-sans text-caption text-on-surface-variant whitespace-nowrap">
          ou contactez-moi directement
        </span>
        <div class="flex-1 h-px bg-on-surface/10"></div>
      </div>

      <!-- Grille de contacts rapides -->
      <!-- 1 colonne mobile → 3 colonnes desktop -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">

        <!-- Email → mailto: ouvre l'application mail sur mobile -->
        <div class="flex flex-col items-center gap-3">
          <div class="flex size-11 items-center justify-center rounded-full bg-primary/15">
            <svg class="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <a
            href="mailto:klara.wantiez@outlook.com"
            class="font-sans text-body-md text-on-surface-variant text-center
                   transition-colors hover:text-primary"
            aria-label="Envoyer un email à Klara Wantiez"
          >
            klara.wantiez@outlook.com
          </a>
        </div>

        <!-- Téléphone → tel: déclenche l'appel sur mobile -->
        <div class="flex flex-col items-center gap-3">
          <div class="flex size-11 items-center justify-center rounded-full bg-primary/15">
            <svg class="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <a
            href="tel:+32473170694"
            class="font-sans text-body-md text-on-surface-variant text-center
                   transition-colors hover:text-primary"
            aria-label="Appeler Klara Wantiez"
          >
            +32 473 17 06 94
          </a>
        </div>

        <!-- Adresse → AddressOpener : Google Maps / Plans / Waze au choix -->
        <div class="flex flex-col items-center gap-3">
          <div class="flex size-11 items-center justify-center rounded-full bg-primary/15">
            <svg class="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <UiAddressOpener
            address="Rue de l'Image 12, 6150 Anderlues, Belgique"
            popover-position="top"
          >
            <span class="font-sans text-body-md text-on-surface-variant text-center leading-snug">
              Centre Pluridisciplinaire<br>de l'Image, Anderlues
            </span>
          </UiAddressOpener>
        </div>

      </div>

    </div>
  </section>
</template>
