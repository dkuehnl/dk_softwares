<script setup>
  import { 
    FwbButton, 
    FwbCard, 
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel } from 'flowbite-vue'

  import { Eye, FunnelPlus, ServerCog, ReceiptText, CodeXml, Wrench, MessageCircle } from 'lucide-vue-next'
  import {useRouter, RouterLink} from 'vue-router'

  const router = useRouter()
  function go_to_project(link) {
    router.push(link)
  }

  window.toggleContent = function (button)   {
    // Nur auf kleinen Screens aktiv
    if (window.innerWidth >= 640) return; // Nur für kleine Screens

    const paragraph = button.nextElementSibling;
    const icon = button.querySelector('svg');
    const isHidden = paragraph.classList.contains('hidden');

    if (isHidden) {
      paragraph.classList.remove('hidden');
      icon.classList.add('rotate-180');
    } else {
      paragraph.classList.add('hidden');
      icon.classList.remove('rotate-180');
    }
  }

</script>

<template>

  <!--Landing-Page bg-[radial-gradient(circle_at_center,_#b3e6ff_20%,_#0088cc_50%,_#0077b3_80%)]-->
  <section class="pt-15 px-2 md:px-10 lg:px-20 xl:px-33 h-[calc(100vh-4rem)] max-h-[calc(768px-4rem)] md:max-h-[calc(900px-4rem)] lg:max-h-[calc(1000px-4rem)] xl:max-h-[calc(1100px-4rem)] overflow-hidden">
    <div class="flex justify-center h-screen">
      <div class="flex flex-row flex-wrap xl:flex-nowrap w-full justify-center xl:justify-between xl:space-x-12">

        <!-- Text Section -->
        <div class="relative isolate px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 flex-1 min-w-[300px] text-center lg:text-left">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
            <div class="relative left-[calc(50%-8rem)] aspect-1155/678 w-80 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-20rem)] sm:w-160" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="flex flex-col items-center xl:items-start">
            <h5 class="text-lg sm:text-xl font-normal mb-2 leading-normal">Passgenaue Software für Ihr Business</h5>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Maßgeschneidert statt<br>"One size fits all"</h1>
            <p class="mb-6 text-sm sm:text-base max-w-md">
              Ich nehme mir die Zeit, um genau zu verstehen, wie Ihr Team heute arbeitet – und wie es morgen noch effizienter werden kann.<br>
              Ob Website, Web-Application oder robuste Server-/Desktop-Lösungen: Nur das, was wirklich gebraucht wird, kommt in die Ziel-Lösung!<br><br>
              Automatisierung von täglichen Routineaufgaben, Optimierung bestehender Prozesse oder Vereinfachung komplexer Workloads – ich helfe Ihnen, wertvolle Zeit zu sparen.<br>
              <span class="font-semibold">Jetzt Kontakt aufnehmen – Ich stehe Ihnen gerne zur Verfügung</span>
            </p>
            <div class="flex flex-row flex-wrap sm:flex-nowrap gap-4 mt-3 justify-center lg:justify-start">
              <FwbButton color="dark" class="cursor-pointer bg-blue-800 px-4 py-2 text-sm sm:text-base" href="/contact" tag="router-link">Contact me</FwbButton>
              <FwbButton color="dark" outline class="cursor-pointer px-4 py-2 text-sm sm:text-base hover:bg-blue-800">Learn more</FwbButton>
            </div>
          </div>
        </div>

        <!-- Bild Section, versteckt bei < xl -->
        <div class="hidden xl:flex items-start w-full max-w-3xl flex-1 justify-center">
          <img
            src="/images/landing_page_2.png"
            alt="Picture"
            class="w-full h-auto object-contain rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-black"
          />
        </div>

        <div class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-24rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+2rem)] aspect-1155/678 w-80 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+32rem)] sm:w-160" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  </section>

  <!--Key-Values-->
  <section class="pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-33 lg:pr-33 pt-20 pb-10">
    <hr class="border-t border-blue-800 mb-16" />
    <div class="flex flex-wrap justify-center lg:justify-evenly gap-x-8 gap-y-12">
      <!-- Feature Box 1 -->
      <div class="flex flex-col items-center sm:flex-row sm:items-start max-w-[300px] sm:max-w-[320px]">
        <Eye class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-800 border-2 border-blue-800 p-2 rounded-md" />
        <div class="flex flex-col mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Benutzerzentrierte Usability</h5>
          <p class="hidden sm:block">Intuitive Oberflächen, maßgeschneidert auf Ihre Zielgruppe.</p>
        </div>
      </div>

      <!-- Feature Box 2 -->
      <div class="flex flex-col items-center sm:flex-row sm:items-start max-w-[300px] sm:max-w-[320px]">
        <Wrench class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-800 border-2 border-blue-800 p-2 rounded-md" />
        <div class="flex flex-col mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Lösungsorientierte Entwicklung</h5>
          <p class="hidden sm:block">Echte Softwarelösungen – kein unnötiger Funktionsballast.</p>
        </div>
      </div>

      <!-- Feature Box 3 -->
      <div class="flex flex-col items-center sm:flex-row sm:items-start max-w-[300px] sm:max-w-[320px]">
        <MessageCircle class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-800 border-2 border-blue-800 p-2 rounded-md" />
        <div class="flex flex-col mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Persönliche Beratung</h5>
          <p class="hidden sm:block">Fundierte Expertenberatung für optimale Entscheidungen.</p>
        </div>
      </div>
    </div>
    <hr class="border-t border-blue-800 mt-16" />
  </section>

  <!--Using Selling Point-->
  <section class="px-2 sm:px-8 pb-20 lg:pt-15 lg:pl-33 lg:pr-33 ">
    <div class="flex flex-col xl:flex-row">
      <!--Left Box (Image) nur ab XL sichtbar-->
      <div class="hidden xl:flex overflow-hidden h-[800px] rounded-3xl shadow-2xl shadow-black w-full max-w-full xl:max-w-5xl 2xl:w-[1000px]">
        <img 
          src="/images/project_management_vertical.png" 
          alt="Picture" 
          class="w-full object-cover"
        />
      </div>

      <!--Right Box-->
      <div class="flex flex-col xl:ml-16 w-full">
        <h2 class="text-4xl font-semibold mb-10 xl:mb-3 leading-tight text-center xl:text-left">
          Der Fahrplan für Ihre Lösung
        </h2>

        <div class="space-y-6">
          <!-- Phase Block Template -->
          <section>
            <button 
              class="w-full flex justify-between items-center text-left text-lg font-semibold leading-normal sm:cursor-default" 
              onclick="toggleContent(this)"
            >
              <span>Phase 1: Analyse & Konzeption</span>
              <svg class="md:hidden w-4 h-4 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p class="mt-2 hidden sm:block sm:mt-2">
              Ich tauche tief in Ihre Abläufe ein, identifiziere Schwachstellen und Bedürfnisse und sammele alle relevanten Fakten, 
              um eine passgenaue Strategie zu entwickeln.
            </p>
          </section>

          <section>
            <button 
              class="w-full flex justify-between items-center text-left text-lg font-semibold leading-normal sm:cursor-default" 
              onclick="toggleContent(this)"
            >
              <span>Phase 2: Prototyp & Live-Demo</span>
              <svg class="md:hidden w-4 h-4 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p class="mt-2 hidden sm:block sm:mt-2">
              Bevor der erste Code entsteht, liefere ich einen interaktiven Prototypen oder ein Architekturdiagramm, damit Sie 
              frühzeitig Feedback geben und die Richtung mitbestimmen können.
            </p>
          </section>

          <section>
            <button 
              class="w-full flex justify-between items-center text-left text-lg font-semibold leading-normal sm:cursor-default" 
              onclick="toggleContent(this)"
            >
              <span>Phase 3: Entwicklung</span>
              <svg class="md:hidden w-4 h-4 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p class="mt-2 hidden sm:block sm:mt-2">
              Gemeinsam optimieren wir kontinuierlich das Ergebnis: In regelmäßigen Reviews besprechen wir Fortschritt, 
              Anpassungen und etwaige Herausforderungen.
            </p>
          </section>

          <section>
            <button 
              class="w-full flex justify-between items-center text-left text-lg font-semibold leading-normal sm:cursor-default" 
              onclick="toggleContent(this)"
            >
              <span>Phase 4: Qualitätssicherung</span>
              <svg class="md:hidden w-4 h-4 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p class="mt-2 hidden sm:block sm:mt-2">
              Durch automatisierte Tests (Unit, Integration & Last) stelle ich sicher, dass Ihre Lösung stabil, 
              performant und nahtlos in Ihre Umgebung integriert läuft.
            </p>
          </section>

          <section>
            <button 
              class="w-full flex justify-between items-center text-left text-lg font-semibold leading-normal sm:cursor-default" 
              onclick="toggleContent(this)"
            >
              <span>Phase 5: Go‑Live & Übergabe</span>
              <svg class="md:hidden w-4 h-4 ml-2 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p class="mt-2 hidden sm:block sm:mt-2">
              Nach Ihrem finalen OK begleite ich den Start und unterstütze bei der reibungslosen Einführung, damit Sie direkt produktiv durchstarten können.
            </p>
          </section>
        </div>
      </div>
    </div>
  </section>

  <!--Project-Section-->
  <section class="bg-[#f2f2f2] pt-10 pl-2 pr-2 xl:pt-30 xl:pl-10 xl:pr-10 pb-30">
    <div class="flex flex-col items-center">
      <h2 class="text-4xl font-semibold mb-10 leading-tight text-center xl:text-left">
        Mehr zu meinen letzten Projekten
      </h2>

      <!-- Projektgrid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

        <!-- Number Converter -->
        <fwb-card @click="go_to_project('/projects/number_converter')" class="[&>*]:h-full group h-full shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white w-full">
          <div class="p-5 h-full flex flex-col justify-between">
            <div class="mb-5">
              <div class="flex items-center space-x-2">
                <FunnelPlus class="w-9 h-9 text-blue-800 border-2 border-blue-800 p-1 rounded-md transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">Number Converter</h5>
              </div>
              <p class="mt-5">
                Konvertiert schnell und unkompliziert große Mengen an Daten
                in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools.
              </p>
            </div>
            <div class="flex flex-col">
              <p class="font-semibold text-sm mb-5">Verfügbare Plattform: Windows</p>
              <div class="flex justify-center">
                <FwbButton size="sm" color="alternative" pill class="hover:bg-blue-800 hover:text-white hover:cursor-pointer transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <!-- EasyDNS -->
        <fwb-card @click="go_to_project('/projects/easy_dns')" class="[&>*]:h-full group h-full shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white w-full">
          <div class="p-5 h-full flex flex-col justify-between">
            <div class="mb-5">
              <div class="flex items-center space-x-2">
                <ServerCog class="w-9 h-9 text-blue-800 border-2 border-blue-800 p-1 rounded-md transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">EasyDNS</h5>
              </div>
              <p class="mt-5">
                Einfaches Tool zum Prüfen und Abfragen von DNS-Records über
                eine benutzerfreundliche GUI.<br>
                Auch DNS-spezifische Extras (wie z.B. ECS) können damit genutzt werden.
              </p>
            </div>
            <div class="flex flex-col">
              <p class="font-semibold text-sm mb-5">Verfügbare Plattform: Windows</p>
              <div class="flex justify-center">
                <FwbButton size="sm" color="alternative" pill class="hover:bg-blue-800 hover:text-white hover:cursor-pointer transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <!-- Invoice Manager -->
        <fwb-card @click="go_to_project('/projects/invoice_manager')" class="[&>*]:h-full group h-full shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white w-full">
          <div class="p-5 h-full flex flex-col justify-between">
            <div class="mb-5">
              <div class="flex items-center space-x-2">
                <ReceiptText class="w-9 h-9 text-blue-800 border-2 border-blue-800 p-1 rounded-md transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">Invoice Manager</h5>
              </div>
              <p class="mt-5">
                Leichtgewichtiges Rechnungstool ohne großes Schnick-Schnack. Einfach
                in der Handhabung, schnelle Performance und mit automatischer
                Cloud-Backup-Funktion.
              </p>
            </div>
            <div class="flex flex-col">
              <p class="font-semibold text-sm mb-5">Verfügbare Plattform: Web</p>
              <div class="flex justify-center">
                <FwbButton size="sm" color="alternative" pill class="hover:bg-blue-800 hover:text-white hover:cursor-pointer transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4-293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <!-- Web-Development -->
        <fwb-card @click="go_to_project('/projects/web_development')" class="[&>*]:h-full group h-full shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white w-full">
          <div class="p-5 h-full flex flex-col justify-between">
            <div class="mb-5">
              <div class="flex items-center space-x-2">
                <CodeXml class="w-9 h-9 text-blue-800 border-2 border-blue-800 p-1 rounded-md transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">Web-Development</h5>
              </div>
              <p class="mt-5">
                Natürlich entwickeln wir auch gerne Ihren individuellen Webauftritt.
                Ob mit eigenem Design oder ohne – wir richten uns ganz nach Ihren Wünschen!
              </p>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-center">
                <FwbButton size="sm" color="alternative" pill class="hover:bg-blue-800 hover:text-white hover:cursor-pointer transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4-293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

      </div>
    </div>
  </section>

  <!--FAQ-->
  <section class="xl:pl-33 xl:pr-33 pt-10 pb-20">
    <fwb-accordion flushed>
      <fwb-accordion-panel>
        <fwb-accordion-header>Warum sollte ich mich für individuelle Software entscheiden?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Oft bieten große, kommerzielle Tools viel mehr Features und Funktionen, als gerade kleine und mittelständische Unternehmen sie benötigen. 
            Sie bezahlen also teilweise enorme Lizenzgebüren für eine Software, bei der Sie nur einen Bruchteil der Funktionen wirklich nutzen. 
            individuelle Software ist somit auf lange Sicht nicht nur kostengünstiger, sondern oft auch deutlich effizenter und einfacher im Umgang, 
            da nur genau das zur Verfügung steht, was auch wirklich benötigt wird. 
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Verkaufe ich auch Softwarelizenzen?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Leider verkaufe ich keine Softwarelizenzen direkt.<br>
            Sollte sich aber in Phase 1 (Analyse & Konzeption) herauskristallisieren, dass eine fertige Lösung Ihre Anforderungen optimal erfüllt, schlage ich Ihnen diese gerne vor.  
            Auf Wunsch unterstütze ich Sie bei Installation & Integration – die Lizenzbestellung übernehmen Sie selbst.<br>
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>
          Bei der Konzeptionierung haben wir eine fertige Softwarelösung gefunden. Für die Integration wird keine Unterstützung mehr benötigt. Was nun?
        </fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Kein Thema – auch das geht.<br>
            Wenn Sie sich für eine vorhandene Softwarelösung entscheiden und 
            keine weitere Implementierungs-Hilfe wünschen, berechne ich eine kleine Pauschale
            (Aufwandsabhängig, max. 3h).  
            So halten wir den Aufwand transparent und fair.
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Ist auch die Übernahme/Weiterentwicklung von Bestandssoftware möglich?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Eine pauschale Antwort ist hier schwierig – jedes System ist anders.  
            Für eine Übernahme oder Weiterentwicklung führe ich zunächst ein kurzes 
            <strong>Initialaudit</strong> durch, das folgende Schritte umfasst:
          </p>
          <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>Analyse vorhandener Dokumentationen</li>
            <li>Quellcode-Review (falls verfügbar)</li>
            <li>Bewertung von Architektur und Abhängigkeiten</li>
            <li>Aufwandsschätzung & Zeitrahmen</li>
          </ul>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Gerade bei älteren Systemen fehlen oft Dokumentation oder Testumgebungen – das gehört alles ins Audit.<br>
            <strong>Sprechen Sie mich an, ich erstelle Ihnen ein unverbindliches Angebot!</strong>
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Wie lange dauert eine individuelle Softwareentwicklung im Mittel?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Das ist natürlich stark abhängig vom Art und Umfang der Lösung. <br>
            Eine einfache Unternehmenswebsite oder kleine Tools wie der Invoice-Manager sind meist in 3-4 Wochen realisierbar.<br>            Komplexere Lösungen, wie der Number-Converter oder Logfile-Parser hingegen benötigen meiste 3-5 Monate Entwicklungszeit. 
            <br><br><strong>Ein genauer Zeitplan kann erst am Ende der Phase 1 generiert werden. </strong>
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Welche Frameworks und Technologien kommen zum Einsatz?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Für Websites und Web-Applikationen setze ich im Frontend-Bereich auf Vue.js, für ein mögliches Backend 
            kommt Python zum Einsatz. <br>
            Gehostet wird auf der Cloud-Infrastruktur von Amazon AWS. <br>
            Für Desktop- oder Serveranwendungen nutze ich je nach Einsatzzweck C/C++ oder Python. 
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Wie sieht es mit Support und Wartung nach Projektabschluss aus?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Auch das ist Bestandteil der Bedarfsanalyse in Phase 1. 
            Aus Ressourcen-Gründen kann ich keinen 24/7-Support mit zeitnaher Reaktion anbieten. 
            In gewissen Umfang ist aber auch nach Projektabschluss noch eine weitere Betreuung möglich. <br>
            <strong>Sprechen Sie mich gerne darauf an!</strong>
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </section>
</template>
