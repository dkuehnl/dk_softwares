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

  <!--Landing-Page-->
  <section class="
    pt-15 pl-33 pr-33 
    bg-[radial-gradient(circle_at_center,_#b3e6ff_20%,_#0088cc_50%,_#0077b3_80%)]
    h-[calc(100vh-4rem)]
    max-h-[calc(768px-4rem)]
    md:max-h-[calc(900px-4rem)]
    lg:max-h-[calc(1000px-4rem)]
    xl:max-h-[calc(1100px-4rem)]"
    >
    <div class="flex justify-center h-screen">
      <!--Landing-Page Box-->
      <div class="flex flex-row space-around">
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
            <FwbButton color="dark" outline class="cursor-pointer">More Info</FwbButton>
          </div>
        </div>
      </div>

      <!--Picture on right site-->
      <div class="flex items-start w-full max-w-3xl">
        <img 
          src="/images/landing_page.jpg" 
          alt="Picture" 
          class="w-full h-auto object-contain rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-black"
        />
      </div>
    </div>
  </section>

  <!--Key-Values-->
  <section class="pl-33 pr-33 pt-25 pb-10">
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
      <div class="flex items-start w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:w-[2000px]">
        <img 
          src="/images/customer_relation2.jpg" 
          alt="Picture" 
          class="w-full h-auto object-contain rounded-3xl shadow-2xl shadow-black"
        />
      </div>

      <!--Right Box-->
      <div class="flex flex-col ml-25">
        <h2 class="text-4xl font-semibold mb-3 leading-tight">
          Überschrift für diesen Abschnitt muss ich mir noch überlegen
        </h2>
        <h5 class="text-lg font-semibold mb-1 leading-normal">
          Noch so eine Unterüberschriftabsatzdings wo auch noch bissl Text 
          rein muss aber ich auch noch keinen Plan hab was und wie viel
        </h5>
        <p>
          Und auch den Text hier drunter. Irgendwas mit perfekt zugeschnittener
          Software ohne viel unnötigen Schnick-Schnack. Nur die Funktionen die 
          auch wirklich gebraucht werden. 
          Außerdem erfinden wir das Rad nicht neu - das heißt wenn es schon 
          eine passende Software auf dem Markt gibt, wird lediglich eine Beratungs-
          Gebühr verrechnet (100€) 
        </p>
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
        <fwb-accordion-header>What is Flowbite?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>Is there a Figma file available?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline dark:text-blue-500">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>What are the differences between Flowbite and Tailwind UI?</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Pro</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </section>

  <!--Footer-->
  <footer class="pl-33 pr-33 pt-25 pb-10 bg-[#004366] text-white">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">dksoftwaresolutions</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Services</h2>
            <ul class="">
              <li class="mb-4">
                <a href="#" class="hover:underline">Web</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Desktop</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">About</h2>
            <ul class="">
              <li class="mb-4">
                <a href="#" class="hover:underline ">About us</a>
              </li>
              <li>
                <a href="#" class="hover:underline">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Legal</h2>
            <ul class="">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-6 border-white-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-white-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Dennis Kühnlein</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" class="text-white-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="text-white-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="text-white-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </a>
          <a href="#" class="text-white-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          </a>
          <a href="#" class="text-white-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>
