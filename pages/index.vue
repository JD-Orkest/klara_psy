<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// pages/index.vue — Orchestrateur principal
// Ce fichier ne contient AUCUNE logique UI ni style direct.
// Il se charge uniquement de :
//   1. Configurer le SEO (useSeoMeta + JSON-LD)
//   2. Assembler les composants de section dans le bon ordre
// ─────────────────────────────────────────────────────────────────────────────

// ── SEO Meta — optimisé pour le référencement local belge ────────────────────
useSeoMeta({
  // Titre optimisé : marque + spécialité + ville (mots-clés locaux prioritaires)
  title: 'Klara Wantiez | Psychologue clinicienne infanto-juvénile à Anderlues',
  ogTitle: 'Klara Wantiez | Psychologue clinicienne infanto-juvénile à Anderlues',

  // Description enrichie pour le snippet Google (150-160 caractères idéaux)
  description: "Espace d'écoute bienveillant pour enfants, adolescents et jeunes adultes. Accompagnement psychologique par Klara Wantiez au Centre Pluridisciplinaire de l'Image à Anderlues.",
  ogDescription: "Espace d'écoute bienveillant pour enfants, adolescents et jeunes adultes. Accompagnement psychologique au Centre Pluridisciplinaire de l'Image à Anderlues.",

  // Mots-clés longue traîne pour le SEO local (psychologie enfant/ado, Anderlues)
  keywords: "psychologue anderlues, psychologue enfant anderlues, psychologue adolescent, thérapie infanto-juvénile, Klara Wantiez, centre pluridisciplinaire de l'image",

  // Open Graph (partage réseaux sociaux)
  ogType: 'website',
  ogLocale: 'fr_BE',
  ogSiteName: 'Klara Wantiez – Psychologue',

  // Twitter Card (aperçu sur Twitter/X)
  twitterCard: 'summary_large_image',

  // Directives robots
  robots: 'index, follow',
  author: 'Klara Wantiez',
})

// ── Structured Data JSON-LD (Schema.org MedicalBusiness) ─────────────────────
// Ce balisage permet à Google d'afficher un Knowledge Panel local avec
// l'adresse, les horaires et le numéro de téléphone directement dans les SERP.
useHead({
  script: [
    {
      type: 'application/ld+json',
      // Note : innerHTML est sûr ici car le contenu est entièrement contrôlé côté serveur
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Klara Wantiez - Psychologue',
        description: "Psychologue clinicienne spécialisée dans l'enfance et l'adolescence. Accompagnement pour enfants, adolescents et jeunes adultes à Anderlues.",
        telephone: '+32473170694',
        email: 'klara.wantiez@outlook.com',
        url: 'https://klara-wantiez.be',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          streetAddress: "Rue de l'Image 12",
          addressLocality: 'Anderlues',
          postalCode: '6150',
          addressCountry: 'BE',
        },
        // Coordonnées géographiques pour Google Maps (à ajuster si nécessaire)
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.4010,
          longitude: 4.2700,
        },
        // Horaires d'ouverture (format Schema.org)
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Monday',
            opens: '09:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Tuesday',
            opens: '09:00',
            closes: '19:00',
          },
        ],
        // Catalogue de services avec tarifs
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Consultations Psychologiques',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Consultation Individuelle (45-60 min)',
                description: 'Séance individuelle de psychologie clinique.',
              },
              price: '60',
              priceCurrency: 'EUR',
            },
          ],
        },
        medicalSpecialty: 'Pediatric',
        knowsAbout: [
          "Psychologie de l'enfant",
          "Psychologie de l'adolescent",
          'Anxiété',
          'Difficultés émotionnelles',
          'Difficultés comportementales',
          'Difficultés scolaires',
          'Construction identitaire',
          'Difficultés relationnelles',
        ],
      }),
    },
  ],
})
</script>

<template>
  <!-- ════════════════════════════════════════════════════════════════════════
       Squelette de la page — Architecture en sections modulaires
       Flux visuel (de haut en bas) :
         TheHeader → Hero → Approach → Domains → PracticalInfo → CTA → TheFooter
       ════════════════════════════════════════════════════════════════════════ -->
  <div class="flex min-h-screen flex-col bg-surface">

    <!-- Navigation principale (sticky) -->
    <TheHeader />

    <!-- Contenu principal — landmark ARIA pour l'accessibilité -->
    <main id="main-content" class="flex-1">

      <!-- Section 1 : Introduction et appels à l'action principaux -->
      <SectionsHero />

      <!-- Section 2 : Approche clinique et portrait de Klara -->
      <SectionsApproach />

      <!-- Section 3 : Domaines d'intervention par tranche d'âge -->
      <SectionsDomains />

      <!-- Section 4 : Tarifs, horaires et localisation -->
      <SectionsPracticalInfo />

      <!-- Section 5 : Appel à l'action final "Prêt(e) à commencer ?" -->
      <SectionsCTA />

    </main>

    <!-- Pied de page -->
    <TheFooter />

  </div>
</template>
