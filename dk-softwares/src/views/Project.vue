<script setup lang="ts">
  import { FwbButton } from 'flowbite-vue'
  import {ref, computed} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter()


  const all_categories = ['Desktop-Application', 'CLI-Tool', 'Server-Application', 'Web']
  const active_cat = ref<string[]>([])
  const project = ref([
    {
        id: 1, 
        title: 'Number Converter', 
        img: '', 
        description: 'Konvertiert schnell und unkompliziert große Mengen an Daten in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools.',
        categories: ['Desktop-Application'],
        link: '/projects/number_converter'
    }, 
    {
        id: 2, 
        title: 'easyDNS', 
        img: '', 
        description: 'Einfaches Tool zum Prüfen und Abfragen von DNS-Records über eine benutzerfreundliche GUI. ',
        categories: ['Desktop-Application'],
        link: '/projects/easy_dns'
    }, 
    {
        id: 3, 
        title: 'LetterShark', 
        img: '', 
        description: 'Hoch-Individualisierter Log-Parser, der neben dem passenden Log-Format auch noch genau auf den Workflow des Kunden abgestimmt ist. ',
        categories: ['Desktop-Application'],
        link: '/projects/letter_shark'
    }, 
    {
        id: 4, 
        title: 'SIP-RTA Analyzer', 
        img: '/images/screen_sip_rta.png', 
        description: 'Kleines, aber sehr effizientes CLI-Tool, dass nicht nur Paketlaufzeiten auf Netzwerkebene, sondern auch auf Application-Ebene misst und aufbereitet. ',
        categories: ['CLI-Tool'],
        link: '/projects/sip_rta'
    }, 
    {
        id: 5, 
        title: 'SIP-Proxy', 
        img: '', 
        description: 'Ein kompletter SIP-Proxy aus Eigenentwicklung, welcher vollen Zugriff auf die SIP-Kommunikation gewährt und nahezu jeden Header manipulierbar macht.',
        categories: ['Server-Application'],
        link: '/projects/sip_proxy'
    }, 
    {
        id: 6, 
        title: 'Invoice-Manager', 
        img: '', 
        description: 'Schlankes und auf das Wesehntliche reduzierte Programm zur Erfassung und Nachhaltung von eigens ausgestellten Rechnungen.',
        categories: ['Desktop-Application'],
        link: '/projects/invoice_manager'
    }, 
    {
        id: 7, 
        title: 'Website: ShutterSpecht', 
        img: '', 
        description: 'Unternehmenspräsentation für einen Fotografen.',
        categories: ['Web'],
        link: ''
    }
  ])

  const upcoming_projects = [
  {
        id: 1, 
        title: 'SRTP Decypher', 
        img: '', 
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
    <!--Heading-->
    <section class="pt-15 pl-33 pr-33 py-16 text-center overflow-hidden">
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <h1 class="text-4xl font-bold">Abgeschlossenen Projekte</h1>
            <p class="mt-4 text-lg text-gray-600">Hier finden Sie einen Überblick über bereits fertige Softwarelösungen.</p>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none" aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
        </div>
    </section>

    <!--Project-Cards-->
    <section class="pt-15 pl-33 pr-33 pb-15 bg-gray-50">

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
            >{{ cat }}
            </FwbButton>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article 
                v-for="p in filtered_projects"
                :key="p.id"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
            <img 
                :src="p.img" 
                :alt="p.title" 
                class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">{{ p.title }}</h3>
                <p class="mt-2 text-gray-600">{{ p.description }}</p>
                <a 
                    @click="go_to_project(p.link)"
                    class="mt-4 inline-block text-blue-600 hover:cursor-pointer"
                >Mehr erfahren →</a>
            </div>
            </article>
        </div>

        <hr class="border-t border-blue-800 mb-5 mt-32" />
    </section>

    <section class="pt-1 pl-33 pr-33 py-16 text-center bg-gray-50">
        <h2 class="text-2xl font-bold mb-12">Coming soon...</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article 
                v-for="p in upcoming_projects"
                :key="p.id"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
            <img 
                :src="p.img" 
                :alt="p.title" 
                class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">{{ p.title }}</h3>
                <p class="mt-2 text-gray-600">{{ p.description }}</p>
                <a 
                    :href="p.link" 
                    class="mt-4 inline-block text-blue-600"
                >Mehr erfahren →</a>
            </div>
            </article>
        </div>
    </section>
</template>
  