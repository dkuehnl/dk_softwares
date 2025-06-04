<script setup lang="ts">
  import { FwbButton, FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
  import {ref, computed} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()


  const all_categories = ['Desktop-Application', 'CLI-Tool', 'Server-Application', 'Web']
  const active_cat = ref<string[]>([])
  const project = ref([
    {
        id: 1, 
        title: 'Number Converter', 
        img: '/images/number-converter_icon.png', 
        description: 'Konvertiert schnell und unkompliziert große Mengen an Daten in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools.',
        categories: ['Desktop-Application'],
        link: '/projects/number_converter'
    }, 
    {
        id: 2, 
        title: 'easyDNS', 
        img: '/images/easydns_icon.png', 
        description: 'Einfaches Tool zum Prüfen und Abfragen von DNS-Records über eine benutzerfreundliche GUI. ',
        categories: ['Desktop-Application'],
        link: '/projects/easy_dns'
    }, 
    {
        id: 3, 
        title: 'LetterShark', 
        img: '/images/letter_shark_icon.png', 
        description: 'Hoch-Individualisierter Log-Parser, der neben dem passenden Log-Format auch noch genau auf den Workflow des Kunden abgestimmt ist. ',
        categories: ['Desktop-Application'],
        link: '/projects/letter_shark'
    }, 
    {
        id: 4, 
        title: 'SIP-RTA Analyzer', 
        img: '/images/sip_rta_icon.png', 
        description: 'Kleines, aber sehr effizientes CLI-Tool, dass nicht nur Paketlaufzeiten auf Netzwerkebene, sondern auch auf Application-Ebene misst und aufbereitet. ',
        categories: ['CLI-Tool'],
        link: '/projects/sip_rta'
    }, 
    {
        id: 5, 
        title: 'SIP-Proxy', 
        img: '/images/sip_proxy_icon.png', 
        description: 'Ein kompletter SIP-Proxy aus Eigenentwicklung, welcher vollen Zugriff auf die SIP-Kommunikation gewährt und nahezu jeden Header manipulierbar macht.',
        categories: ['Server-Application'],
        link: '/projects/sip_proxy'
    }, 
    {
        id: 6, 
        title: 'Invoice-Manager', 
        img: '/images/invoice-manager_icon.png', 
        description: 'Schlankes und auf das Wesehntliche reduzierte Programm zur Erfassung und Nachhaltung von eigens ausgestellten Rechnungen.',
        categories: ['Desktop-Application'],
        link: '/projects/invoice_manager'
    }, 
    {
        id: 7, 
        title: 'Website: ShutterSpecht', 
        img: '/images/shutter_specht_icon.png', 
        description: 'Unternehmenspräsentation für einen Fotografen.',
        categories: ['Web'],
        link: ''
    }
  ])

  const upcoming_projects = [
  {
        id: 1, 
        title: 'SRTP Decypher', 
        img: '/images/srtp_decypher.png', 
        description: 'Debugging-Tool zur Analyse von fehlerhaften SRTP-Streams.',
        categories: ['Desktop-Application'],
        link: ''
    }, 
  ]

  const filtered_projects = computed(() => {
    if (active_cat.value.length === 0) {
        return project.value
    }
    return project.value.filter(p => 
        p.categories.some(cat => 
            active_cat.value.includes(cat)
        ))
  })

  function toggle_categorie(cat: string) {
    const idx = active_cat.value.indexOf(cat)
    if (idx === -1) {
        active_cat.value.push(cat)
    } else {
        active_cat.value.splice(idx, 1)
    }
  }

  function reset_categories() {
    console.log("click")
    active_cat.value = []
  }

  function go_to_project(link) {
    router.push(link)
  }
</script>

<template>
  <!-- Heading pt-10 px-4 sm:px-6 lg:px-20 -->
  <section class="pb-10 pt-2 pl-3 sm:pb-6 lg:pb-20 text-center overflow-hidden">
    <div class="xl:pl-33 xl:pr-33 pb-5 text-left">
      <fwb-breadcrumb>
        <fwb-breadcrumb-item home href="/" tag="router-link">
          Home
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item href="#">
          Projects
        </fwb-breadcrumb-item>
      </fwb-breadcrumb>
    </div>

    <div class="relative isolate px-4 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-72 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-144" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">Abgeschlossene Projekte</h1>
      <p class="mt-4 text-base sm:text-lg text-gray-600">Hier finden Sie einen Überblick über bereits fertige Softwarelösungen.</p>
      <div class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-24rem)] pointer-events-none" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-72 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-144" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </section>

  <!-- Project-Cards -->
  <section class="pt-10 px-4 sm:px-6 lg:px-20 pb-10">
    <!-- Category Buttons -->
    <div class="flex flex-wrap gap-4 mb-8 justify-center">
      <FwbButton 
        size="sm" 
        class="hover:cursor-pointer"
        :color="active_cat.length === 0 ? 'default' : 'light'"
        @click="reset_categories"
      >Alle</FwbButton>
      <FwbButton 
        size="sm" 
        class="hover:cursor-pointer"
        v-for="cat in all_categories"
        :key="cat"
        :color="active_cat.includes(cat) ? 'default' : 'light'"
        @click="() => toggle_categorie(cat)"
      >{{ cat }}</FwbButton>
    </div>

    <!-- Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <article 
        v-for="p in filtered_projects"
        :key="p.id"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition h-auto flex flex-col"
      >
        <img 
          :src="p.img" 
          :alt="p.title" 
          class="w-full h-48 object-cover object-top"
        >
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold">{{ p.title }}</h3>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">{{ p.description }}</p>
          </div>
          <a 
            @click="go_to_project(p.link)"
            class="mt-4 inline-block text-blue-600 hover:underline hover:cursor-pointer text-sm sm:text-base"
          >Mehr erfahren →</a>
        </div>
      </article>
    </div>

    <hr class="border-t border-blue-800 my-10" />  
  </section>

  <!-- Coming Soon Section -->
  <section class="pt-4 px-4 sm:px-6 lg:px-20 text-center pb-10">
    <h2 class="text-2xl font-bold mb-8">Coming soon...</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article 
        v-for="p in upcoming_projects"
        :key="p.id"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
      >
        <img 
          :src="p.img" 
          :alt="p.title" 
          class="w-full h-48 object-cover"
        >
        <div class="p-4 flex-1 flex flex-col justify-between">
          <h3 class="text-xl font-semibold">{{ p.title }}</h3>
          <p class="mt-2 text-gray-600 text-sm sm:text-base">{{ p.description }}</p>
          <a 
            :href="p.link" 
            class="mt-4 inline-block text-blue-600 hover:underline cursor-pointer text-sm sm:text-base"
          >Mehr erfahren →</a>
        </div>
      </article>
    </div>
  </section>
</template>
  