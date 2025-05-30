<script setup>
  import { ref, onMounted, onBeforeUnmount  } from 'vue'

  const images = ref([
    {src: '/images/letter_shark_01.png', alt: 'image-01'},
    {src: '/images/letter_shark_02.png', alt: 'image-02'},
    {src: '/images/letter_shark_03.png', alt: 'image-03'},
    {src: '/images/letter_shark_04.png', alt: 'image-04'},

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
  <!--Slider-->
  <section class="pt-15 pl-33 pr-33 pb-15 bg-gray-50">
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
          class="w-full h-96 object-contain bg-white"
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
  <section class="pt-15 pl-90 pr-90 pb-15 bg-gray-50">
    <div>
      <div class="px-4 sm:px-0">
        <h3 class="text-base/7 font-semibold text-gray-900">LetterShark</h3>
        <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Ein stark individualisierter Log-Parser, der gezielt für die benötigten Logfile-Formate entwickelt wurde.  
        </p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Einsatzgebiert</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Applikations-Analyse</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Plattformen</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Windows (portabel, keine Installation notwendig)</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Entwicklungszeit</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">2 Monat</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Beschreibung</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Dieses Tool hat ein sehr spezifisches Einsatzgebiet und wurde sehr genau auf die Bedürfnisse des DevOps-Teams abgestimmt. <br>
              Neben dem Parsen der nicht-standardisierten Logfiles wurden zudem noch individuelle Suchfunktionen mit speziellem Highlighting 
              und einer Export-Funktion realisiert. Ebenfalls wurde die spezielle File-Hirarchie, in dem die Logfiles vorliegen, berücksichtigt. 
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style>
/* Optional: Stelle sicher, dass die Bilder das Seitenverhältnis beibehalten */
.fwb-carousel img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>