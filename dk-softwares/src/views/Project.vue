<script setup lang="ts">
  import { FwbButton } from 'flowbite-vue'
  import {ref, computed} from 'vue'

  const all_categories = ['Desktop-Application', 'CLI-Tools', 'Server-Application', 'Web']
  const active_cat = ref<string[]>([])
  const project = ref([
    {
        id: 1, 
        title: 'Number Converter', 
        img: '', 
        description: 'Konvertiert schnell und unkompliziert große Mengen an Daten in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools.',
        categories: ['Desktop-Applications'],
        link: ''
    }, 
    {
        id: 2, 
        title: 'easyDNS', 
        img: '', 
        description: 'Einfaches Tool zum Prüfen und Abfragen von DNS-Records über eine benutzerfreundliche GUI. ',
        categories: ['Desktop-Applications'],
        link: ''
    }, 
    {
        id: 3, 
        title: 'LetterShark', 
        img: '', 
        description: 'Hoch-Individualisierter Log-Parser, der neben dem passenden Log-Format auch noch genau auf den Workflow des Kunden abgestimmt ist. ',
        categories: ['Desktop-Applications'],
        link: ''
    }, 
    {
        id: 4, 
        title: 'SIP-RTT Analyzer', 
        img: '/images/screen_sip_rta.png', 
        description: 'Kleines, aber sehr effizientes CLI-Tool, dass nicht nur Paketlaufzeiten auf Netzwerkebene, sondern auch auf Application-Ebene misst und aufbereitet. ',
        categories: ['CLI-Tool'],
        link: ''
    }, 
    {
        id: 5, 
        title: 'SIP-Proxy', 
        img: '', 
        description: 'Ein kompletter SIP-Proxy aus Eigenentwicklung, welcher vollen Zugriff auf die SIP-Kommunikation gewährt und nahezu jeden Header manipulierbar macht.',
        categories: ['Server-Application'],
        link: ''
    }, 
    {
        id: 6, 
        title: 'Invoice-Manager', 
        img: '', 
        description: 'Schlankes und auf das Wesehntliche reduzierte Programm zur Erfassung und Nachhaltung von eigens ausgestellten Rechnungen.',
        categories: ['Desktop-Applications'],
        link: ''
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

  function reset_categories() {
    console.log("click")
    active_cat.value = []
  }
  }
</script>

<template>
    <!--Heading-->
    <section class="pt-15 pl-33 pr-33 py-16 text-center">
        <h1 class="text-4xl font-bold">Abgeschlossenen Projekte</h1>
        <p class="mt-4 text-lg text-gray-600">Hier finden Sie einen Überblick über bereits fertige Softwarelösungen.</p>
    </section>

    <!--Project-Cards-->
    <section class="pt-15 pl-33 pr-33 pb-15 bg-gray-50">

        <div class="flex flex-wrap gap-4 mb-8 justify-center">
            <FwbButton 
                size="sm" 
                class="hover:cursor-pointer"
                :color="active_cat.length === 0 ? 'default' : 'light'"
                @click=reset_categories
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 1" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">Number Converter</h3>
                <p class="mt-2 text-gray-600">
                    Konvertiert schnell und unkompliziert große Mengen an Werten 
                    in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools.
                </p>
                <a href="/projekte/projekt1" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 2" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">easyDNS</h3>
                <p class="mt-2 text-gray-600">
                    Einfaches Tool zum Prüfen und Abfragen von DNS-Records über 
                    eine benutzerfreundliche GUI. 
                </p>
                <a href="/projekte/projekt2" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 3" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">LetterShark</h3>
                <p class="mt-2 text-gray-600">
                    Hoch-Individualisierter Log-Parser, der neben dem passenden Log-Format auch 
                    noch genau auf den Workflow des Kunden abgestimmt ist. 
                </p>
                <a href="/projekte/projekt3" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="/images/screen_sip_rta.png" alt="SIP-RTT-Analyzer" class="w-full h-80 object-cover object-left">
            <div class="p-4">
                <h3 class="text-xl font-semibold">SIP-RTT Analyzer</h3>
                <p class="mt-2 text-gray-600">
                    Kleines, aber sehr effizientes CLI-Tool, dass nicht nur Paketlaufzeiten auf Netzwerkebene, 
                    sondern auch auf Application-Ebene misst und aufbereitet.  
                </p>
                <a href="/projekte/projekt3" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 3" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">SIP-Proxy</h3>
                <p class="mt-2 text-gray-600">
                    Ein kompletter SIP-Proxy aus Eigenentwicklung, welcher vollen Zugriff auf die
                    SIP-Kommunikation gewährt und nahezu jeden Header manipulierbar macht. 
                </p>
                <a href="/projekte/projekt3" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 3" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">Invoice-Manager</h3>
                <p class="mt-2 text-gray-600">
                    Schlankes und auf das Wesehntliche reduzierte Programm zur Erfassung und Nachhaltung 
                    von eigens ausgestellten Rechnungen. 
                </p>
                <a href="/projekte/projekt3" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>

            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src="" alt="Projekt 3" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold">Website: ShutterSpecht</h3>
                <p class="mt-2 text-gray-600">
                    Unternehmenspräsentation für einen Fotografen. 
                </p>
                <a href="/projekte/projekt3" class="mt-4 inline-block text-blue-600">Mehr erfahren →</a>
            </div>
            </article>
        </div>

        <hr class="border-t border-blue-800 mb-16" />


    </section>
</template>
  