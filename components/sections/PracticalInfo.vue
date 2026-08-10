<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// PracticalInfo.vue — Section "Informations Pratiques & Localisation"
// Contenu :
//   • Note importante pour les parents (alerte douce)
//   • Tableau des tarifs (HTML sémantique <table>)
//   • Adresse et horaires avec icônes inline
//   • Placeholder Google Maps (à remplacer par l'iframe réelle)
// ─────────────────────────────────────────────────────────────────────────────

// Liste des services et tarifs
const services = [
  {
    name: 'Consultation Individuelle (45-60 min)',
    price: '60€',
  },
] as const

// Horaires d'ouverture
const schedule = [
  { day: 'Lundi', hours: '09:00 – 19:00' },
  { day: 'Mardi', hours: '09:00 – 19:00' },
] as const
</script>

<template>
  <!-- ══════════════════════════════════════════════════════════════════════
       Section Informations Pratiques + Localisation
       Fond surface-container-low → alternance tonale avec la section Domains
       ══════════════════════════════════════════════════════════════════════ -->
  <section
    id="infos-pratiques"
    class="bg-surface-container-low py-20 lg:py-32"
    aria-labelledby="practical-title"
  >
    <div class="container-klara">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- ── Colonne gauche : Informations pratiques ────────────────────── -->
        <div class="space-y-8">

          <h2
            id="practical-title"
            class="section-title"
          >
            Informations Pratiques
          </h2>

          <!-- Note importante pour les parents — alerte douce Terracotta -->
          <div
            class="rounded-xl border border-secondary/25
                   bg-secondary-container/15 px-5 py-4"
            role="note"
            aria-label="Information importante pour les parents"
          >
            <div class="flex items-start gap-3">
              <svg
                class="mt-0.5 size-5 shrink-0 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <p class="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Pour les enfants, la <strong class="text-on-surface">première consultation</strong>
                se fait en présence des parents ; pour les adolescents, ce n'est pas
                nécessaire. Consultation en visio disponible à partir de 14 ans.
              </p>
            </div>
          </div>

          <!-- Tableau des tarifs — HTML sémantique pour l'accessibilité et le SEO -->
          <div class="overflow-hidden rounded-xl border border-outline-variant">
            <table
              class="w-full"
              aria-label="Tableau des tarifs de consultation — Klara Wantiez Psychologue"
            >
              <thead>
                <tr class="bg-surface-container">
                  <th
                    scope="col"
                    class="px-5 py-3 text-left font-sans text-label-md
                           text-on-surface-variant"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-right font-sans text-label-md
                           text-on-surface-variant"
                  >
                    Tarif
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="service in services"
                  :key="service.name"
                  class="border-t border-outline-variant bg-surface-container-lowest"
                >
                  <td class="px-5 py-4 font-sans text-body-md text-on-surface">
                    {{ service.name }}
                  </td>
                  <td
                    class="px-5 py-4 text-right font-sans text-body-md
                           font-semibold text-primary"
                  >
                    {{ service.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mention de bas de tableau -->
          <p class="font-sans text-caption text-on-surface-variant">
            * Tout rendez-vous annulé moins de 24h à l'avance est dû.
            Paiement par espèces ou application mobile.
          </p>

        </div>

        <!-- ── Colonne droite : Localisation ──────────────────────────────── -->
        <div
          id="contact"
          class="space-y-8"
        >
          <h2 class="section-title">Localisation</h2>

          <!-- Bloc adresse + horaires avec icônes -->
          <div class="space-y-6">

            <!-- Adresse physique — cliquable pour ouvrir dans Maps/Waze -->
            <div class="flex items-start gap-4">
              <div
                class="mt-0.5 flex size-9 shrink-0 items-center justify-center
                       rounded-full bg-primary/10"
              >
                <svg
                  class="size-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <!-- AddressOpener → clic = choix Google Maps / Plans / Waze -->
              <UiAddressOpener
                address="Rue de l'Image 12, 6150 Anderlues, Belgique"
                popover-position="bottom"
              >
                <address class="not-italic font-sans text-body-md">
                  <strong class="text-on-surface">
                    Centre Pluridisciplinaire de l'Image
                  </strong>
                  <br>
                  <span class="text-on-surface-variant">
                    Rue de l'Image 12, 6150 Anderlues, Belgique
                  </span>
                </address>
              </UiAddressOpener>
            </div>

            <!-- Horaires d'ouverture -->
            <div class="flex items-start gap-4">
              <div
                class="mt-0.5 flex size-9 shrink-0 items-center justify-center
                       rounded-full bg-primary/10"
              >
                <svg
                  class="size-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div class="font-sans text-body-md">
                <strong class="text-on-surface">Horaires</strong>
                <ul
                  class="mt-1.5 space-y-1 text-on-surface-variant"
                  aria-label="Horaires d'ouverture du cabinet"
                >
                  <li
                    v-for="slot in schedule"
                    :key="slot.day"
                    class="flex gap-2"
                  >
                    <span class="inline-block w-16 text-on-surface">{{ slot.day }} :</span>
                    <span>{{ slot.hours }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- ── Carte interactive OpenStreetMap ────────────────────────── -->
          <!-- Coordonnées exactes de la Rue de l'Image, Anderlues          -->
          <!-- (50.4007°N, 4.2687°E — source : Nominatim / OpenStreetMap)   -->
          <div
            class="overflow-hidden rounded-xl border border-outline-variant shadow-ambient"
            style="aspect-ratio: 16 / 9;"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.257%2C50.396%2C4.281%2C50.407&layer=mapnik&marker=50.4007%2C4.2687"
              width="100%"
              height="100%"
              style="border: 0; display: block;"
              loading="lazy"
              title="Carte — Centre Pluridisciplinaire de l'Image, Rue de l'Image 12, 6150 Anderlues"
              aria-label="Carte OpenStreetMap du cabinet de Klara Wantiez — Rue de l'Image 12, Anderlues"
            ></iframe>
          </div>

          <!-- Lien texte vers OpenStreetMap pour agrandir -->
          <p class="text-center font-sans text-caption text-on-surface-variant">
            <a
              href="https://www.openstreetmap.org/?mlat=50.4007&mlon=4.2687#map=17/50.4007/4.2687"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Agrandir la carte ↗
            </a>
          </p>

        </div>

      </div>
    </div>
  </section>
</template>
