<script setup>
  import { FwbButton} from 'flowbite-vue'

</script>

<template>
  <div class="flex justify-center h-screen">
    <!--Landing-Page Box-->
    <div class="flex flex-row space-around">
      <!--Text on let site-->
      <div class="flex flex-col item-start">
        <h4>Individuelle Softwarelösungen</h4>
        <h1 class="text-5xl font-bold mb-4">Für jedes Problem<br>gibt es auch eine Lösung</h1>
        <p>
          Und hier noch ein bisschen bla bla, dass ich mir 
          später noch etwas überlegen muss. Aber hauptsache 
          hier steht ein bisschen Text fürs Layout und so
        </p>
        <div class="flex flex-row item-start">  
          <FwbButton class="mr-5">Contact us</FwbButton>
          <FwbButton>Learn more</FwbButton>
        </div>
      </div>
    </div>

    <!--Picture on right site-->
    <div class="flex">
      <img src="/images/landing_page.jpg" alt="Picture"/>
    </div>
  </div>
</template>
