<script setup>
  import { ref, onMounted, onBeforeUnmount  } from 'vue'
  import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'

  const images = ref([
    {src: '/images/invoice-manager_01.png', alt: 'image-01'},
    {src: '/images/invoice-manager_02.png', alt: 'image-02'}, 
    {src: '/images/invoice-manager_03.png', alt: 'image-03'},
    {src: '/images/invoice-manager_04.png', alt: 'image-04'},
  ])

  const currentIndex = ref(0)
  let interval = null

  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }

  function prevSlide() {
    currentIndex.value =
      (currentIndex.value - 1 + images.value.length) % images.value.length
  }

  function goToSlide(index) {
    currentIndex.value = index
  }

  onMounted(() => {
    interval = setInterval(nextSlide, 10000)
  })

  onBeforeUnmount(() => {
    clearInterval(interval)
  })

</script>

<template>
  <div class="pt-5 px-4 sm:px-6 lg:px-20 lg:pl-33 lg:pr-33 pb-5">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item href="/projects" tag="router-link">
        Projects
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item href="#">
        Invoice-Manager
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
  </div>

  <div class="flex flex-col xl:flex-row xl:pt-10 px-4 sm:px-6 lg:px-20 pb-10">
    <!--Slider-->
    <section class="mx-auto w-4/5 xl:w-1/4 mb-5">
      <div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <!-- Images -->
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="`transform: translateX(-${currentIndex * 100}%);`"
        >
          <div
            v-for="(img, index) in images"
            :key="index"
            class="w-full flex-shrink-0"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-contain bg-white"
            />
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="prevSlide"
          class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 hover:bg-opacity-100 transition"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 hover:bg-opacity-100 transition"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <!-- Indicators -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <button
            v-for="(img, index) in images"
            :key="index"
            @click="goToSlide(index)"
            :class="['w-3 h-3 rounded-full', currentIndex === index ? 'bg-blue-600' : 'bg-gray-300']"
          ></button>
        </div>
      </div>
    </section>

    <!--Project-Facts-->
    <section class="xl:ml-10 md:w-3/4">
      <div>
        <div class="px-4 sm:px-0">
          <h3 class="text-base/7 font-semibold text-gray-900">Invoice-Manager</h3>
          <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Ein schlanker, praxisnaher Rechnungs-Manager als moderne Alternative zur klassischen Excel-Lösung.
          </p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm/6 font-medium text-gray-900">Einsatzgebiert</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Buchhaltung</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm/6 font-medium text-gray-900">Plattformen</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Universal (Webbased)</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm/6 font-medium text-gray-900">Entwicklungszeit</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">1 Monate</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm/6 font-medium text-gray-900">Beschreibung</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                Der Invoice-Manager entstand auf Wunsch eines kleinen Unternehmens, das seine Buchhaltung effizienter gestalten wollte. <br>
                Ziel war es, eine einfache und stabile Anwendung zu schaffen, die den Umgang mit Rechnungen deutlich erleichtert. 
                Neben einem intuitiven Formular zur Rechnungserstellung bietet das Tool eine direkte Druckfunktion, sowie die Möglichkeit, 
                alle Rechnungsdaten gesammelt als Export für den Steuerberater bereitzustellen. Zusätzlich sorgt ein automatisiertes Cloud-Backup 
                für Sicherheit gegen Datenverlust – ganz ohne technische Vorkenntnisse. Die Software ist damit eine praktische Lösung für 
                kleine Betriebe, die ihre Prozesse digitalisieren wollen, ohne aufwendige Buchhaltungssysteme einzuführen.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* Optional: Stelle sicher, dass die Bilder das Seitenverhältnis beibehalten */
.fwb-carousel img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>