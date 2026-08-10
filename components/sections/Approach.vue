<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// Approach.vue — Section "Ma démarche"
// Layout : Photo portrait de Klara (gauche) + Texte approche clinique (droite)
// Performance : loading="lazy" sur l'image (hors viewport initial)
// ─────────────────────────────────────────────────────────────────────────────
</script>

<template>
  <!-- ══════════════════════════════════════════════════════════════════════
       Section "Ma Démarche" — chargée en lazy (sous la ligne de flottaison)
       Fond légèrement plus sombre (surface-container-low) pour créer
       une séparation tonale avec la section Hero (principe Material You)
       ══════════════════════════════════════════════════════════════════════ -->
  <section
    id="presentation"
    class="bg-surface-container-low py-20 lg:py-32"
    aria-labelledby="approach-title"
  >
    <div class="container-klara">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <!-- ── Colonne gauche : Portrait de Klara Wantiez ──────────────────── -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm lg:max-w-md">

            <!-- Cadre photo avec ombre ambiante douce -->
            <div class="overflow-hidden rounded-xl shadow-ambient-lg">

              <!-- TODO: Insérer ici la photo professionnelle de Klara Wantiez    -->
              <!-- Chemin cible en production : /images/klara-wantiez-portrait.webp -->
              <!-- Dimensions recommandées : 600×750px (format portrait 4:5)       -->
              <!-- Format : WebP compressé à ≤ 100KB                               -->
              <!-- La description alt enrichie contribue au SEO local              -->
              <img
                src="/images/klara-wantiez-portrait.jpg"
                alt="Klara Wantiez, psychologue clinicienne spécialisée dans l'enfance et l'adolescence, au Centre Pluridisciplinaire de l'Image à Anderlues, Belgique"
                width="600"
                height="750"
                loading="lazy"
                class="w-full object-cover"
              />

            </div>

            <!-- Décoration organique — cercle flou terracotta en arrière-plan -->
            <div
              class="pointer-events-none absolute -bottom-6 -left-6 size-32
                     rounded-full bg-secondary/10 blur-2xl"
              aria-hidden="true"
            ></div>
            <div
              class="pointer-events-none absolute -top-4 -right-4 size-20
                     rounded-full bg-primary/10 blur-xl"
              aria-hidden="true"
            ></div>

          </div>
        </div>

        <!-- ── Colonne droite : Texte de l'approche clinique ─────────────── -->
        <div class="space-y-6">

          <!-- Étiquette de section -->
          <p class="section-label">Ma démarche</p>

          <!-- Titre H2 de la section -->
          <h2
            id="approach-title"
            class="font-serif text-headline-md font-medium text-on-surface leading-snug"
          >
            Une approche clinique<br>
            ancrée dans l'empathie
          </h2>

          <!-- Corps du texte — paragraphes aérés pour faciliter la lecture -->
          <!-- Hauteur de ligne généreuse (28px) → respiration visuelle optimale -->
          <div class="space-y-4 font-sans text-body-md text-on-surface-variant">
            <p>
              Psychologue clinicienne spécialisée dans l'enfance et l'adolescence,
              je vous accueille au sein du Centre Pluridisciplinaire de l'Image.
              Rigoureuse et bienveillante, je mets mes compétences d'écoute,
              d'observation clinique et de travail en équipe au service du
              bien-être des personnes.
            </p>
            <p>
              Chaque enfant est unique, tout comme son parcours. C'est pourquoi
              je m'attache à créer un lien de confiance solide, permettant
              d'explorer ensemble les difficultés rencontrées, qu'elles soient
              émotionnelles, comportementales ou relationnelles.
            </p>
            <p>
              Ma pratique repose sur une écoute active et non-jugeante, offrant
              à l'enfant un espace sécurisant pour s'exprimer.
            </p>
          </div>

          <!-- Citation mise en valeur (style testimonial Literata italique) -->
          <blockquote
            class="border-l-2 border-secondary pl-5 py-1"
            aria-label="Citation de Klara Wantiez"
          >
            <p class="font-serif italic text-body-lg text-on-surface">
              "Ensemble, nous cheminons vers votre équilibre serein."
            </p>
          </blockquote>

          <!-- CTA vers la prise de rendez-vous -->
          <div class="pt-2">
            <a
              href="https://rosa.be/fr/hp/klara-wantiez/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
              aria-label="Prendre rendez-vous sur ROSA.be (ouvre un nouvel onglet)"
            >
              Prendre rendez-vous
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
