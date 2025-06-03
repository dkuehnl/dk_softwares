<script setup>
import { FwbButton } from 'flowbite-vue';
</script>

<template>
  <section class="pt-10 px-4 pb-10 sm:px-6 lg:px-20 lg:pb-20 overflow-hidden">
    <div class="relative isolate px-4 pt-14 lg:px-8 max-w-3xl mx-auto text-left">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-72 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-144"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
        Individuelle Softwarelösungen<br />
        für nachhaltigen Erfolg
      </h1>
      <p class="mt-4 text-base sm:text-lg text-gray-600">
        Ob Prozessautomatisierung, Ablösung von Excel-Tools oder Entwicklung einer maßgeschneiderten
        Software – ich begleite Sie bei jedem Schritt Ihrer Digitalisierungsstrategie. So stellen Sie
        sicher, dass Ihr Unternehmen wettbewerbsfähig bleibt und langfristig wächst.
      </p>

      <div
        class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-24rem)] pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-72 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-144"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  </section>

  <section id="desktop" class="px-6 sm:px-8 pb-20 lg:pt-15 lg:pl-33 lg:pr-33 bg-[#f2f2f2]">
    <div class="flex flex-col xl:flex-row xl:items-center">
      <!--Left Text-Box-->
      <div class="flex flex-col xl:ml-16 xl:mr-40 w-full">
        <h2 class="text-2xl sm:text-3xl md:text-4xl mt-10 font-semibold mb-5 xl:mb-3 leading-tight text-center xl:text-left">
          Desktop-Applikationen<br>
          für Spezialisten
        </h2>
        <p class="mt-5">
          In vielen Branchen sind Standardlösungen nicht mehr ausreichend: zu unübersichtlich, zu
          unflexibel, zu viele unnötige Funktionen. <br>
          Mit einer individuell entwickelten Desktop-Applikation schaffen Sie eine passgenaue Umgebung, 
          in der Ihre Fachkräfte schnell und effizient arbeiten.
          Gemeinsam definieren wir Anforderungen, optimieren den Workflow und integrieren die neue
          Lösung nahtlos in Ihre Systemlandschaft.
        </p>
      </div>

      <!--Right Box (Image) nur ab XL sichtbar-->
      <div class="hidden xl:flex overflow-hidden h-full rounded-xl shadow-2xl shadow-black">
        <img 
          src="/images/number-converter_01.png" 
          alt="Picture" 
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>

  <section id="server" class="px-6 sm:px-8 pb-20 lg:pt-15 lg:pl-33 lg:pr-33">
    <div class="flex flex-col xl:flex-row xl:items-center">
      <!--Left Box (Image) nur ab XL sichtbar-->
      <div class="hidden xl:flex xl:ml-16 xl:mr-40 overflow-hidden h-full rounded-xl shadow-2xl shadow-black">
        <img 
          src="/images/invoice-manager_01.png" 
          alt="Picture" 
          class="h-full w-full object-cover"
        />
      </div>

      <!--Right Text-Box-->
      <div class="flex flex-col w-full">
        <h2 class="text-2xl sm:text-3xl md:text-4xl mt-10 font-semibold mb-5 xl:mb-3 leading-tight text-center xl:text-left">
          Server-Applikationen<br>
          für effiziente Automatisierung
        </h2>
        <p class="mt-5">
          Viele tägliche Aufgaben laufen noch immer manuell über Excel oder Word – ein hoher Zeitaufwand,
          der kaum kalkulierbar ist. Mit einer speziell entwickelten Server-Applikation automatisieren
          Sie wiederkehrende Prozesse, reduzieren Fehlerquellen und senken langfristig Ihre Kosten.
          Ob auf Ihren eigenen Servern oder in der Cloud (Amazon AWS, Google Cloud &amp; Co.): Wir
          implementieren Lösungen, die Ihre Abläufe beschleunigen und Ihre IT-Infrastruktur optimal
          nutzen.
        </p>
      </div>
    </div>
  </section>

  <section id="web" class="px-6 sm:px-8 pb-20 lg:pt-15 lg:pl-33 lg:pr-33 bg-[#f2f2f2]">
    <div class="flex flex-col xl:flex-row xl:items-center">
      <!--Left Text-Box-->
      <div class="flex flex-col xl:ml-16 xl:mr-40 w-full">
        <h2 class="text-2xl sm:text-3xl md:text-4xl mt-10 font-semibold mb-5 xl:mb-3 leading-tight text-center xl:text-left">
          Websites für<br>
          Ihren professionellen Auftritt
        </h2>
        <p class="mt-5">
          Ihr Online-Auftritt ist oft der erste Eindruck, den potenzielle Kunden gewinnen. Ob eine
          komplett neue Website oder die Modernisierung Ihrer bestehenden Seite – gemeinsam entwickeln
          wir ein zeitgemäßes Design, das Ihre Markenwerte widerspiegelt und Besucher überzeugt.
          Responsive, suchmaschinenoptimiert und exakt auf Ihre Zielgruppe zugeschnitten: So steigern
          Sie Vertrauen und generieren nachhaltig neue Anfragen.
        </p>
      </div>

      <!--Right Box (Image) nur ab XL sichtbar-->
      <div class="hidden xl:flex overflow-hidden h-full rounded-xl shadow-2xl shadow-black">
        <img 
          src="/images/shutter_specht_01.png" 
          alt="Picture" 
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>

</template>