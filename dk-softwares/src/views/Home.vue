<script setup>
  import { 
    FwbButton, 
    FwbCard, 
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel } from 'flowbite-vue'

  import { Eye, FunnelPlus, ServerCog, ReceiptText, CodeXml, Wrench, MessageCircle } from 'lucide-vue-next'

  const greeting = [
    {value: "", name: ""},
    {value: "Herr", name: "Herr"}, 
    {value: "Frau", name: "Frau"}
  ]
</script>

<template>

  <!--Landing-Page bg-[radial-gradient(circle_at_center,_#b3e6ff_20%,_#0088cc_50%,_#0077b3_80%)]-->
  <section class="
    pt-15 pl-33 pr-33 
    
    h-[calc(100vh-4rem)]
    max-h-[calc(768px-4rem)]
    md:max-h-[calc(900px-4rem)]
    lg:max-h-[calc(1000px-4rem)]
    xl:max-h-[calc(1100px-4rem)]
    overflow-hidden"
    >
    <div class="flex justify-center h-screen">
      <div class="flex flex-row space-around">
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
        <!--Landing-Page Box-->
          <!--Text on let site-->
          <div class="flex flex-col item-start mr-25">
            <h5 class="text-xl font-normal mb-1 leading-normal">Passgenaue Software für Ihr Business</h5>
            <h1 class="text-5xl font-bold mb-4 leading-tight">Maßgeschneidert statt<br>"One size fits all"</h1>
            <p class="mr-20">
              Ich nehme mir die Zeit, um genau zu verstehen, wie Ihr Team heute arbeitet –  
              und wie es morgen noch effizienter werden kann.  <br>
              Ob Website, Web-App oder robuste Server-/Desktop-Lösung:  
              Nur das was auch wirklich gebraucht wird schafft es in die Ziel-Lösung!<br><br>
              Automatisierung von täglichen Routineaufgaben, Optimierung bestehender
              Prozesse oder Vereinfachung komplexer Workloads - Ich helfe Ihnen 
              wertvolle Zeit zu sparen. <br>
              <span class="font-semibold">Jetzt Kontakt aufnehmen - Ich stehe Ihnen gerne zur Verfügung </span>
            </p>
            <div class="flex flex-row item-start leading-tight mt-3">  
              <FwbButton color="dark" class="mr-5 cursor-pointer">Contact me</FwbButton>
              <FwbButton color="dark" outline class="cursor-pointer">Learn more</FwbButton>
            </div>
          </div>
        </div>

        <!--Picture on right site-->
        <div class="flex items-start w-full max-w-3xl">
          <img 
            src="/images/landing_page_2.png" 
            alt="Picture" 
            class="w-full h-auto object-contain rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-black"
          />
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  </section>

  <!--Key-Values-->
  <section class="pl-33 pr-33 pt-25 pb-10">
    <hr class="border-t border-blue-800 mb-16" />
    <div class="flex items-center justify-between">
      <div class="flex flex-row"> 
        <Eye class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Benutzerzentrierte Usability</h5>
          <p>Intuitive Oberflächen, maßgeschneidert auf Ihre Zielgruppe.</p>
        </div>
      </div>
      
      <div class="flex flex-row ml-10 mr-10"> 
        <Wrench class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Lösungsorientierte Entwicklung</h5>
          <p>Echte Softwarelösungen – kein unnötiger Funktionsballast.</p>
        </div>
      </div>

      <div class="flex flex-row"> 
        <MessageCircle class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Persönliche Beratung</h5>
          <p>Fundierte Expertenberatung für optimale Entscheidungen.</p>
        </div>
      </div>
    </div>
    <hr class="border-t border-blue-800 mt-16" />
  </section>

  <!--Using Selling Point-->
  <section class="pl-33 pr-33 pb-20 pt-15">
    <div class="flex flex-row">

      <!--Left Box-->
      <div class="flex items-start w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:w-[1000px]">
        <img 
          src="/images/project_management_vertical.png" 
          alt="Picture" 
          class="w-full h-auto object-contain rounded-3xl shadow-2xl shadow-black"
        />
      </div>

      <!--Right Box-->
      <div class="flex flex-col ml-25">
        <h2 class="text-4xl font-semibold mb-3 leading-tight">
          Der Fahrplan für Ihre Lösung
        </h2>

        <div class="space-y-6">
          <section>
            <h5 class="text-lg font-semibold leading-normal">
              Phase 1: Analyse & Konzeption
            </h5>
            <p class="mt-2">
              Ich tauche tief in Ihre Abläufe ein, identifiziere Schwachstellen und Bedürfnisse und sammele alle relevanten Fakten, um eine passgenaue Strategie zu entwickeln.
            </p>
          </section>

          <section>
            <h5 class="text-lg font-semibold leading-normal">
              Phase 2: Prototyp & Live-Demo
            </h5>
            <p class="mt-2">
              Bevor der erste Code entsteht, liefere ich einen interaktiven Prototypen oder ein Architekturdiagramm, damit Sie frühzeitig Feedback geben und die Richtung mitbestimmen können.
            </p>
          </section>

          <section>
            <h5 class="text-lg font-semibold leading-normal">
              Phase 3: Entwicklung
            </h5>
            <p class="mt-2">
              Gemeinsam optimieren wir kontinuierlich das Ergebnis: In regelmäßigen Reviews besprechen wir Fortschritt, Anpassungen und etwaige Herausforderungen.
            </p>
          </section>

          <section>
            <h5 class="text-lg font-semibold leading-normal">
              Phase 4: Qualitätssicherung
            </h5>
            <p class="mt-2">
              Durch automatisierte Tests (Unit, Integration & Last) stelle ich sicher, dass Ihre Lösung stabil, performant und nahtlos in Ihre Umgebung integriert läuft.
            </p>
          </section>

          <section>
            <h5 class="text-lg font-semibold leading-normal">
              Phase 5: Go‑Live & Übergabe
            </h5>
            <p class="mt-2">
              Nach Ihrem finalen OK begleite ich den Start und unterstütze bei der reibungslosen Einführung, damit Sie direkt produktiv durchstarten können.
            </p>
          </section>
        </div>

        <div class="flex justify-center mt-8">
          <h5 class="text-lg font-semibold cursor-pointer hover:underline">
            Mehr erfahren
          </h5>
        </div>
      </div>

    </div>
  </section>

  <!--Project-Section-->
  <section class="bg-[#f2f2f2] pt-30 pl-10 pr-10 pb-30">
    <div class="flex flex-col items-center">
      <h2 class="text-4xl font-semibold mb-10 leading-tight">
        Mehr zu unseren letzten Projekten
      </h2>

      <!--Spinaround-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!--Boxes-->
        <fwb-card href="#" class="[&>*]:h-full group h-full ml-5 mr-5 min-w-xs shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white">
          <div class="p-5 h-full flex flex-col justify-between">

            <div class="mb-5"> 
              <div class="flex items-center space-x-2">
                <FunnelPlus 
                  class="w-9 h-9 mr-5 text-blue-800 border-2 border-blue-800 p-1 rounded-md
                  transition-colors duration-300
                  group-hover:bg-blue-800 
                  group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">Number Converter</h5>
              </div>
              <p class="mt-5">
                Konvertiert schnell und unkompliziert große Mengen an Werten 
                in vordefinierte oder eigene Filter für die gängigsten Data-Analytic-Tools. 
              </p>
            </div>

            <div class="flex flex-col">
              <p class="font-semibold text-sm mb-5">Verfügbare Plattform: Windows</p>

              <div class="flex justify-center">
                <FwbButton 
                  size="sm" 
                  color="alternative" 
                  pill 
                  class="hover:bg-blue-800 hover:text-white hover:cursor-pointer
                        transition-colors duration-300
                        group-hover:bg-blue-800 
                        group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <fwb-card href="#" class="[&>*]:h-full group h-full ml-5 mr-5 min-w-xs shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white">
          <div class="p-5 h-full flex flex-col justify-between">

            <div class="mb-5"> 
              <div class="flex items-center space-x-2">
                <ServerCog 
                  class="w-9 h-9 mr-5 text-blue-800 border-2 border-blue-800 p-1 rounded-md
                  transition-colors duration-300
                  group-hover:bg-blue-800 
                  group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">EasyDNS</h5>
              </div>
              <p class="mt-5">
                Einfaches Tool zum Prüfen und Abfragen von DNS-Records über 
                eine benutzerfreundliche GUI. <br>
                Auch DNS-spezifische Extras (wie z.B. ECS) können damit genutzt werden.
              </p>
            </div>

            <div class="flex flex-col">
              <p class="font-semibold text-sm mb-5">Verfügbare Plattform: Windows</p>
              <div class="flex justify-center">
                <FwbButton 
                  size="sm" 
                  color="alternative" 
                  pill 
                  class="hover:bg-blue-800 hover:text-white hover:cursor-pointer
                        transition-colors duration-300
                        group-hover:bg-blue-800 
                        group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <fwb-card href="#" class="[&>*]:h-full group h-full ml-5 mr-5 min-w-xs shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white">
          <div class="p-5 h-full flex flex-col justify-between">

            <div class="mb-5">  
              <div class="flex items-center space-x-2">
                <ReceiptText 
                  class="w-9 h-9 mr-5 text-blue-800 border-2 border-blue-800 p-1 rounded-md
                  transition-colors duration-300
                  group-hover:bg-blue-800 
                  group-hover:text-white" />
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
                <FwbButton 
                  size="sm" 
                  color="alternative" 
                  pill 
                  class="hover:bg-blue-800 hover:text-white hover:cursor-pointer
                        transition-colors duration-300
                        group-hover:bg-blue-800 
                        group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
                    </svg>
                  </div>
                </FwbButton>
              </div>
            </div>
          </div>
        </fwb-card>

        <fwb-card href="#" class="[&>*]:h-full group h-full ml-5 mr-5 min-w-xs shadow-none hover:shadow-xl transition-shadow duration-300 hover:bg-white">
          <div class="p-5 h-full flex flex-col justify-between">

            <div class="mb-5"> 
              <div class="flex items-center space-x-2">
                <CodeXml 
                  class="w-9 h-9 mr-5 text-blue-800 border-2 border-blue-800 p-1 rounded-md
                  transition-colors duration-300
                  group-hover:bg-blue-800 
                  group-hover:text-white" />
                <h5 class="text-lg font-semibold leading-normal">Web-Development</h5>
              </div>
              <p class="mt-5">
                Natürlich entwickeln wir auch gerne Ihren individuellen Webauftritt. 
                Ob mit eigenem Deisgn oder ohne - wir richten uns ganz nach Ihren Wünschen!
              </p>
            </div>

            <div class="flex flex-col">
              <div class="flex justify-center">
                <FwbButton 
                  size="sm" 
                  color="alternative" 
                  pill 
                  class="hover:bg-blue-800 hover:text-white hover:cursor-pointer
                        transition-colors duration-300
                        group-hover:bg-blue-800 
                        group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
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
  <section class="pl-33 pr-33 pt-10 pb-20">
    <fwb-accordion flushed>
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
