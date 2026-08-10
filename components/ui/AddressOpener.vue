<script setup lang="ts">
// ─────────────────────────────────────────────────────────────────────────────
// AddressOpener.vue — Menu contextuel pour ouvrir une adresse
// dans l'application de navigation au choix : Google Maps, Plans ou Waze.
// S'utilise en wrappant le texte d'adresse à rendre cliquable.
// ─────────────────────────────────────────────────────────────────────────────

const props = defineProps<{
  // Adresse complète (utilisée dans les URL de navigation)
  address: string
  // Classe CSS appliquée au conteneur (pour contrôle du positionnement)
  popoverPosition?: 'top' | 'bottom'
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

// Encodage de l'adresse pour les URL
const encoded = computed(() => encodeURIComponent(props.address))

// Les trois applications de navigation
const navApps = computed(() => [
  {
    id: 'google',
    name: 'Google Maps',
    url: `https://www.google.com/maps/dir/?api=1&destination=${encoded.value}`,
  },
  {
    id: 'apple',
    name: 'Plans (Apple Maps)',
    url: `https://maps.apple.com/?daddr=${encoded.value}&dirflg=d`,
  },
  {
    id: 'waze',
    name: 'Waze',
    url: `https://waze.com/ul?q=${encoded.value}&navigate=yes`,
  },
])

// Fermeture au clic en dehors du composant
function handleOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

// Fermeture avec Échap (accessibilité clavier)
function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => document.addEventListener('click', handleOutsideClick, true))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick, true))
</script>

<template>
  <!-- Conteneur relatif pour le positionnement du popover -->
  <div
    ref="containerRef"
    class="relative inline"
    @keydown="handleKeyDown"
  >
    <!-- Déclencheur — le contenu du slot devient cliquable -->
    <button
      type="button"
      class="group text-left cursor-pointer underline-offset-2 hover:underline
             focus-visible:rounded focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-primary"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :aria-label="`Ouvrir l'itinéraire vers ${address}`"
      @click.stop="isOpen = !isOpen"
    >
      <slot />
    </button>

    <!-- Popover de choix de l'application de navigation -->
    <Transition
      enter-active-class="transition-all duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="isOpen"
        :class="[
          'absolute left-0 z-50 w-52 overflow-hidden',
          'rounded-xl border border-outline-variant',
          'bg-surface-container-lowest shadow-ambient-lg',
          popoverPosition === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2',
        ]"
        role="menu"
        aria-label="Choisir une application de navigation"
      >
        <!-- En-tête -->
        <p
          class="border-b border-outline-variant px-4 py-2 font-sans
                 text-caption text-on-surface-variant"
        >
          Ouvrir l'itinéraire dans…
        </p>

        <!-- Liste des applications -->
        <div class="py-1">
          <a
            v-for="app in navApps"
            :key="app.id"
            :href="app.url"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            class="flex items-center gap-3 px-4 py-2.5 font-sans text-body-md
                   text-on-surface transition-colors hover:bg-surface-container
                   focus-visible:bg-surface-container focus-visible:outline-none"
            @click="isOpen = false"
          >
            <!-- Google Maps -->
            <svg
              v-if="app.id === 'google'"
              class="size-4 shrink-0 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>

            <!-- Plans (Apple Maps) -->
            <svg
              v-else-if="app.id === 'apple'"
              class="size-4 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>

            <!-- Waze -->
            <svg
              v-else
              class="size-4 shrink-0 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

            <span>{{ app.name }}</span>
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>
