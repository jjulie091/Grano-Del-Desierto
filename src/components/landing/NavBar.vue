<script setup>
import { ref, onMounted } from 'vue'
import imageSrc from "../../assets/Icon-navbar.jpeg"; // Asegúrate de importar la imagen

const menuOpen = ref(false)

// Cargar estado del menú
onMounted(() => {
  menuOpen.value = localStorage.getItem('menuOpen') === 'true'
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  localStorage.setItem('menuOpen', menuOpen.value)
}

</script>

<template>
    <nav style="background-color: #3f2b24; box-shadow: #3f2b24; scrollbar-shadow-color: #3f2b24;" class="sticky top-0 z-50 shadow-2xl transition-shadow duration-300">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <!-- Contenedor principal del navbar -->
      <div class="relative flex h-16 items-center justify-between">
        <!-- Sección izquierda (Botón móvil + Logo) -->
        <div class="flex items-center flex-1 sm:items-stretch sm:justify-start">
          <!-- Botón móvil -->
          <div class="flex sm:hidden">
            <button 
              @click="toggleMenu"
              class="inline-flex items-center justify-center p-2 text-gray-400 custom-hover rounded-lg focus:outline-none"
            >
              <span class="sr-only">Abrir menú</span>
              <svg
                v-if="!menuOpen"
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                v-else
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Logo centrado en móvil -->
          <div class="flex flex-1 justify-center sm:justify-start">
            <div class="flex items-center">
              <picture>
                <source :srcset="imageSrc.src" type="image/webp" />
                <img class="h-15 w-auto" :src="imageSrc.src" alt="Logo" width="56" height="56" />
              </picture>
              <!-- Texto solo visible en desktop -->
              <span class="hidden sm:block lora-text text-3xl text-white ml-4">
                Grano del Desierto
              </span>
            </div>
          </div>
        </div>

        <!-- Menú desktop (derecha) -->
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#nosotros" class="rounded-md px-3 py-2 text-md lora-text text-gray-300 custom-hover">Nosotros</a>
            <a href="#variedades" class="rounded-md px-3 py-2 text-md lora-text text-gray-300 custom-hover">Variedades</a>
            <a href="#contacto" class="rounded-md px-3 py-2 text-md lora-text text-gray-300 custom-hover">Contacto</a>
          </div>
        </div>
      </div>

      <!-- Menú móvil -->
      <div 
        id="mobile-menu"
        class="sm:hidden fixed top-16 left-0 right-0 z-50 bg-[#3f2b24] overflow-y-auto transition-transform duration-300 transform"
        :class="menuOpen ? 'translate-y-0' : '-translate-y-full'"
        style="max-height: fit-content; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3);"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#nosotros" class="block px-3 py-2 text-gray-300 custom-hover">Nosotros</a>
          <a href="#variedades" class="block px-3 py-2 text-gray-300 custom-hover">Variedades</a>
          <a href="#contacto" class="block px-3 py-2 text-gray-300 custom-hover">Contacto</a>
        </div>
      </div>
    </div>
  </nav>

  <slot />
</template>
<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.-translate-y-full {
  transform: translateY(-100%);
}

.translate-y-0 {
  transform: translateY(0);
}

#mobile-menu {
  height: calc(100vh - 4rem); /* Altura total menos altura del navbar */
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

#mobile-menu.translate-y-0 {
  transform: translateY(0);
}

.custom-hover:hover {
  background-color: rgb(222, 198, 172);
  color: #3f2b24;
}

.lora-text {
  font-display: swap;
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.02em;
  word-spacing: -0.25em;
}
</style>
