<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// Domains.vue — Section "Domaines d'Intervention"
// Architecture : données locales → composant UiDomainCard (réutilisable via props)
// ─────────────────────────────────────────────────────────────────────────────

// Interface TypeScript pour typer chaque domaine d'intervention
interface Domain {
  id: string
  icon: string           // Emoji — accessible, aucune requête HTTP, expressif
  title: string          // Titre affiché (ex: "Enfants")
  ageGroup: string       // Tranche d'âge (ex: "De 4 à 11 ans")
  specialties: string[]  // Liste des motifs de consultation
  color: 'primary' | 'secondary' | 'tertiary' // Couleur d'accent de la carte
}

// Données des trois domaines d'intervention de Klara Wantiez
const domains: Domain[] = [
  {
    id: 'enfants',
    icon: '🌱',
    title: 'Enfants',
    ageGroup: 'De 4 à 11 ans',
    specialties: [
      'Gestion des émotions',
      'Difficultés comportementales',
      'Difficultés scolaires',
      'Anxiété',
    ],
    color: 'primary', // Sauge douce → croissance, développement
  },
  {
    id: 'adolescents',
    icon: '🌿',
    title: 'Adolescents',
    ageGroup: 'De 12 à 17 ans',
    specialties: [
      'Construction identitaire',
      'Mal-être / Anxiété',
      'Difficultés scolaires',
      'Difficultés émotionnelles',
    ],
    color: 'secondary', // Terracotta → énergie, transformation
  },
  {
    id: 'jeunes-adultes',
    icon: '🌳',
    title: 'Jeunes adultes',
    ageGroup: 'Dès 18 ans',
    specialties: [
      'Difficultés relationnelles',
      'Problèmes familiaux',
      'Mal-être / Anxiété',
    ],
    color: 'tertiary', // Sable → stabilité, enracinement
  },
]
</script>

<template>
  <!-- ══════════════════════════════════════════════════════════════════════
       Section "Domaines d'Intervention"
       Retour au fond Albâtre (#f7fafb) — alternance tonale avec la section Approach
       ══════════════════════════════════════════════════════════════════════ -->
  <section
    id="domaines"
    class="bg-surface py-20 lg:py-32"
    aria-labelledby="domains-title"
  >
    <div class="container-klara">

      <!-- En-tête centré de la section -->
      <div class="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
        <h2
          id="domains-title"
          class="section-title"
        >
          Domaines d'Intervention
        </h2>
        <p class="mt-4 section-subtitle">
          Je propose un accompagnement adapté à chaque étape du développement,
          du jeune enfant à l'entrée dans l'âge adulte.
        </p>
      </div>

      <!-- Grille des cartes de domaines -->
      <!-- Responsive : 1 colonne (mobile) → 2 colonnes (sm) → 3 colonnes (lg) -->
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Liste des domaines d'intervention"
      >
        <!-- Composant réutilisable — v-bind spread les props directement -->
        <UiDomainCard
          v-for="domain in domains"
          :key="domain.id"
          v-bind="domain"
          role="listitem"
        />
      </div>

    </div>
  </section>
</template>
