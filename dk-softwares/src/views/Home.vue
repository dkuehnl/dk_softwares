<script setup>
  import { FwbButton} from 'flowbite-vue'
  import { DraftingCompass } from 'lucide-vue-next'
</script>

<template>

  <!--Landing-Page-->
  <section class="
    pt-15 pl-33 pr-33 
    bg-[radial-gradient(circle_at_center,_#e9d5ff_20%,_#a78bfa_80%)]
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
          <h4 class="mb-1">Individuelle Softwarelösungen</h4>
          <h1 class="text-5xl font-bold mb-4 leading-tight">Für jedes Problem<br>gibt es auch eine Lösung</h1>
          <p>
            Und hier noch ein bisschen bla bla, dass ich mir 
            später noch etwas überlegen muss. Aber hauptsache 
            hier steht ein bisschen Text fürs Layout und so
          </p>
          <div class="flex flex-row item-start leading-tight mt-3">  
            <FwbButton class="mr-5">Contact us</FwbButton>
            <FwbButton>Learn more</FwbButton>
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
        <DraftingCompass class="w-14 h-14 text-violet-500 border-2 border-violet-500 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h3>Individuelle Softwarelösungen</h3>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
        </div>
      </div>
      
      <div class="flex flex-row"> 
        <DraftingCompass class="w-14 h-14 text-violet-500 border-2 border-violet-500 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h3>Individuelle Softwarelösungen</h3>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
        </div>
      </div>

      <div class="flex flex-row"> 
        <DraftingCompass class="w-14 h-14 text-violet-500 border-2 border-violet-500 p-1 rounded-md"/>
        <div class="flex flex-col ml-3">
          <h3>Individuelle Softwarelösungen</h3>
          <p>Präzise abgestimmt auf Ihre Bedürfnisse.</p>
        </div>
      </div>
    </div>
    <hr class="border-t border-violet-500 mt-16" />
  </section>
</template>
