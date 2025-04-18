<script setup>
  import { FwbButton, FwbCard } from 'flowbite-vue'
  import { DraftingCompass, FunnelPlus, ServerCog, ReceiptText, CodeXml } from 'lucide-vue-next'
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
          <h5 class="text-xl font-normal mb-1 leading-normal">Individuelle Softwarelösungen</h5>
          <h1 class="text-5xl font-bold mb-4 leading-tight">Für jedes Problem<br>gibt es auch eine Lösung</h1>
          <p>
            Und hier noch ein bisschen bla bla, dass ich mir 
            später noch etwas überlegen muss. Aber hauptsache 
            hier steht ein bisschen Text fürs Layout und so
          </p>
          <div class="flex flex-row item-start leading-tight mt-3">  
            <FwbButton color="dark" class="mr-5 cursor-pointer">Contact us</FwbButton>
            <FwbButton color="dark" outline class="cursor-pointer">Learn more</FwbButton>
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
        <DraftingCompass class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Individuelle Softwarelösungen</h5>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
        </div>
      </div>
      
      <div class="flex flex-row"> 
        <DraftingCompass class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Individuelle Softwarelösungen</h5>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
        </div>
      </div>

      <div class="flex flex-row"> 
        <DraftingCompass class="w-14 h-14 text-blue-800 border-2 border-blue-800 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h5 class="text-lg font-semibold mb-1 leading-normal">Individuelle Softwarelösungen</h5>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
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

  <!--Section Contact-->
  <section class="pl-33 pr-33 pt-25 pb-10">
    
  </section>

</template>
