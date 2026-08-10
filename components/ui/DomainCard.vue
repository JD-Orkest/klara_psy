<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// DomainCard.vue — Carte d'intervention réutilisable (composant atomique UI)
// Reçoit ses données via props TypeScript → zéro logique business interne.
// Animation : légère élévation au survol (hover:-translate-y-1)
// ─────────────────────────────────────────────────────────────────────────────

// Définition des props avec types stricts
const props = defineProps<{
  id: string
  icon: string            // Emoji représentant visuellement le domaine
  title: string           // Nom du domaine (ex: "Enfants")
  ageGroup: string        // Tranche d'âge (ex: "De 4 à 11 ans")
  specialties: string[]   // Motifs de consultation
  color: 'primary' | 'secondary' | 'tertiary'
}>()

// Mapping des couleurs d'accent selon la prop "color"
// Chaque couleur est appliquée à l'icône, au titre et aux puces de liste
const colorClasses = computed(() => {
  const map = {
    primary: {
      iconBg: 'bg-primary/10',
      iconText: 'text-primary',
      title: 'text-primary',
      bullet: 'bg-primary',
    },
    secondary: {
      iconBg: 'bg-secondary/10',
      iconText: 'text-secondary',
      title: 'text-secondary',
      bullet: 'bg-secondary',
    },
    tertiary: {
      iconBg: 'bg-tertiary/10',
      iconText: 'text-tertiary',
      title: 'text-tertiary',
      bullet: 'bg-tertiary',
    },
  }
  return map[props.color]
})
</script>

<template>
  <!-- Carte — article sémantique pour chaque domaine d'intervention -->
  <!-- hover:-translate-y-1 → micro-interaction de "lift" organique -->
  <article
    :aria-labelledby="`domain-title-${id}`"
    class="card-tonal flex flex-col gap-5 p-7
           hover:shadow-ambient-lg hover:-translate-y-1 hover:bg-surface-container-lowest"
  >

    <!-- Icône du domaine dans un cercle coloré -->
    <div
      :class="[
        'flex size-12 items-center justify-center rounded-xl text-2xl',
        colorClasses.iconBg,
      ]"
      role="img"
      :aria-label="`Domaine : ${title}`"
    >
      {{ icon }}
    </div>

    <!-- Titre + tranche d'âge -->
    <div>
      <h3
        :id="`domain-title-${id}`"
        :class="['font-serif text-headline-sm font-medium', colorClasses.title]"
      >
        {{ title }}
      </h3>
      <p class="mt-0.5 font-sans text-caption text-on-surface-variant">
        {{ ageGroup }}
      </p>
    </div>

    <!-- Liste des spécialités avec puces colorées personnalisées -->
    <!-- Remplace les puces par défaut (•) par de petits cercles de la couleur du domaine -->
    <ul
      class="space-y-2.5"
      :aria-label="`Motifs de consultation — ${title}`"
    >
      <li
        v-for="specialty in specialties"
        :key="specialty"
        class="flex items-center gap-3 font-sans text-body-md text-on-surface-variant"
      >
        <!-- Puce colorée personnalisée (système de design : "custom bullet points") -->
        <span
          :class="['size-1.5 shrink-0 rounded-full', colorClasses.bullet]"
          aria-hidden="true"
        ></span>
        {{ specialty }}
      </li>
    </ul>

  </article>
</template>
