<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// Hero.vue — Section d'introduction principale
// Optimisation LCP : le titre H1 et le bouton CTA sont dans le viewport initial.
// L'image est chargée avec fetchpriority="high" pour améliorer le LCP.
// Layout : Texte (gauche) + Maquette navigateur du cabinet (droite)
// ─────────────────────────────────────────────────────────────────────────────
</script>

<template>
  <!-- ══════════════════════════════════════════════════════════════════════
       Section Héros — cible LCP (Largest Contentful Paint)
       Stratégie : contenu critique non-lazy, images above-the-fold prioritaires
       ══════════════════════════════════════════════════════════════════════ -->
  <section
    id="accueil"
    class="relative overflow-hidden bg-surface py-16 lg:py-24"
    aria-labelledby="hero-title"
  >
    <!-- Décoration d'arrière-plan — cercle gradient sage très discret -->
    <div
      class="pointer-events-none absolute -right-40 -top-40 size-[500px]
             rounded-full bg-primary/5 blur-3xl"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -left-20 bottom-0 size-72
             rounded-full bg-secondary/5 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="container-klara relative">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- ── Colonne gauche : Contenu textuel ───────────────────────────── -->
        <!-- order-2 mobile → order-1 desktop : le texte passe en premier sur desktop -->
        <div class="order-2 lg:order-1">

          <!-- Étiquette de contexte -->
          <p class="section-label mb-4">
            Psychologue clinicienne infanto-juvénile
          </p>

          <!-- H1 — Titre principal, optimisé LCP, PAS de lazy loading ici -->
          <h1
            id="hero-title"
            class="font-serif text-display-mobile font-semibold text-on-surface
                   lg:text-display-lg"
          >
            Un espace d'écoute
            <!-- "bienveillant" mis en valeur avec la couleur Sauge primaire -->
            <span class="text-primary italic">bienveillant</span>
            pour votre enfant et votre adolescent.
          </h1>

          <!-- Description introductive -->
          <p class="mt-6 max-w-xl font-sans text-body-lg text-on-surface-variant">
            Accompagnement psychologique au Centre Pluridisciplinaire de l'Image.
            Ensemble, nous cheminons vers un équilibre serein.
          </p>

          <!-- Appels à l'action -->
          <div class="mt-8 flex flex-wrap items-center gap-4">

            <!-- CTA Principal — Terracotta : émotion, chaleur, action directe -->
            <a
              href="https://rosa.be/fr/hp/klara-wantiez/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
              aria-label="Prendre rendez-vous sur ROSA.be (ouvre un nouvel onglet)"
            >
              <!-- Icône calendrier SVG inline — zéro requête HTTP supplémentaire -->
              <svg
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5"
                />
              </svg>
              Prendre rendez-vous sur ROSA
            </a>

            <!-- CTA Secondaire — ancre vers la section des domaines -->
            <a href="#domaines" class="btn-ghost">
              Découvrir mes services
            </a>

          </div>

        </div>

        <!-- ── Colonne droite : Maquette du site / cabinet ────────────────── -->
        <div class="order-1 flex items-center justify-center lg:order-2">

          <!-- Maquette "navigateur" — effet professionnel et moderne -->
          <div
            class="w-full max-w-lg overflow-hidden rounded-xl
                   shadow-ambient-lg bg-surface-container-lowest
                   border border-outline-variant"
          >

            <!-- Chrome du navigateur fictif -->
            <div
              class="flex items-center gap-2 border-b border-outline-variant
                     bg-surface-container-low px-4 py-3"
              aria-hidden="true"
            >
              <!-- Boutons macOS simulés (décoratifs uniquement) -->
              <span class="size-3 rounded-full bg-error/40"></span>
              <span class="size-3 rounded-full bg-secondary/40"></span>
              <span class="size-3 rounded-full bg-primary/40"></span>
              <!-- Barre d'adresse fictive -->
              <div
                class="ml-2 flex-1 rounded-full border border-outline-variant
                       bg-surface px-3 py-1 text-center font-sans text-caption
                       text-on-surface-variant"
              >
                klara-wantiez.be
              </div>
            </div>

            <!-- Zone image — intérieur du cabinet thérapeutique -->
            <!-- width/height explicites → prévention du CLS (Cumulative Layout Shift) -->
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">

              <!-- TODO: Insérer ici l'image optimisée de l'intérieur du cabinet -->
              <!-- Chemin cible en production : /images/cabinet-interieur.webp    -->
              <!-- Dimensions recommandées : 800×600px minimum                    -->
              <!-- Format : WebP avec fallback AVIF pour les navigateurs modernes -->
              <!-- Compression cible : ≤ 80KB pour un score PageSpeed optimal     -->
              <!-- Attribut fetchpriority="high" → LCP prioritaire                -->
              <img
                src="/images/cabinet-interieur.jpeg"
                alt="Intérieur du cabinet de psychologie — ambiance chaleureuse, fauteuils confortables dans un espace lumineux et apaisant"
                width="800"
                height="600"
                loading="eager"
                fetchpriority="high"
                class="size-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>
