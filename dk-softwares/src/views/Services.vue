<script setup>
import { FwbButton } from 'flowbite-vue';
</script>

<template>
  <!--Heading-->
  <section class="pt-15 pl-33 pr-33 text-center">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl py-10 sm:py-15 lg:py-20">
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Ihr Fahrplan zur passenden Lösung</h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Erleichtern auch Sie Ihren Arbeitsalltag durch eine maßgeschneiderte Software. 
            Kontaktieren Sie mich noch heute für ein kostenfreies Erstgespräch!</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <FwbButton color="dark" class="mr-5 cursor-pointer">Contact me</FwbButton>
            <FwbButton color="dark" outline class="cursor-pointer">More Info</FwbButton>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#0088cc] to-[#66ccff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </section>

  <section class="pl-33 pr-33 pt-25 pb-10">
    <aside class="bg-white shadow-lg rounded-lg p-8 space-y-8"> 
      <h2 class="text-4xl font-semibold mb-6">Der Fahrplan für Ihre Lösung</h2> 
      <div class="space-y-6"> 
        <!-- Phase 1 --> 
        <section> 
          <h5 class="text-lg font-semibold">Phase 1: Analyse & Konzeption</h5> 
          <p>
            Wir starten mit einem Kick-off, in dem Sie mir Problemstellung und Zielbild schildern. 
            Anschließend werfe ich einen genauen Blick auf Ihre Prozesse, identifiziere Stolpersteine und 
            erfasse alle relevanten Details.<br>
            Auf Basis dieser Erkenntnisse erstelle ich ein maßgeschneidertes Konzept. 
            Dieses besprechen wir gemeinsam und legen somit die solide Grundlage für die nächste Phase.
          </p> 
        </section> 
        <section> 
          <h5 class="text-lg font-semibold">Phase 2: Prototyp & Live-Demo</h5> 
          <p>
            Auf Basis des Konzepts entsteht ein interaktiver Prototyp (MVP), den Sie live testen und bewerten können. 
            So gewinnen Sie früh ein Gefühl für UI, Funktionen und Workflow.<br>
            Sie haben jederzeit die Möglichkeit, Feedback zu geben oder Anpassungen vorzuschlagen. 
            Erst wenn der Prototyp Sie voll überzeugt, gehen wir in die vollständige Umsetzung.<br>
            Sollte der MVP wider Erwarten nicht passen, können wir den Prozess hier beenden. 
            Die bis dahin geleistete Arbeit stelle ich wie vereinbart in Rechnung.
          </p> 
        </section> 
        <section> 
          <h5 class="text-lg font-semibold">Phase 3: Entwicklung</h5> 
          <p>
            Jetzt beginnt die Umsetzung: In kurzen Sprints (z.B. zweiwöchentliche Iterationen) implementiere 
            ich die Features und liefere Ihnen nach jedem Sprint eine lauffähige Demo.<br>
            Während regelmäßiger Review-Meetings prüfen wir gemeinsam den Fortschritt, besprechen 
            Optimierungen und beseitigen etwaige Hindernisse. So stellen wir sicher, dass das Projekt stets 
            in die richtige Richtung läuft.
          </p> 
        </section> 
        <section> 
          <h5 class="text-lg font-semibold">Phase 4: Qualitätssicherung</h5> 
          <p>
            Parallel zur Entwicklung führe ich automatisierte Tests (Unit, Integration, End-to-End) durch, 
            um Stabilität und Performance zu garantieren.<br>
            Außerdem teste ich die Integration in Ihre bestehende Infrastruktur (APIs, Datenbanken, externe Dienste), 
            damit beim Go-Live alles reibungslos zusammenspielt.
          </p> 
        </section> 
        <section> 
          <h5 class="text-lg font-semibold">Phase 5: Go‑Live & Übergabe</h5> 
          <p>
            Nach erfolgreichem Abschluss aller Tests und Abnahme übergebe ich Ihnen die komplette 
            Lösung inklusive Quellcode, Installationsskripte und Dokumentation.<br>
            Auf Wunsch übernehme ich auch das laufende Support- und Versionsmanagement – sprechen Sie mich 
            einfach auf ein Wartungsangebot an.<br><br>
            <span class="text-blue-800">
              <strong>Wichtig:</strong> Ich überwache relevante Sicherheits- und Technologie-Updates 
              und informiere Sie proaktiv, falls ein kritisches Patch oder Update notwendig wird 
              (bis zu fünf Jahre nach Übergabe).
            </span>
          </p> 
        </section> 
        <!-- ... weitere Phasen ... --> 
      </div> 
    </aside>
  </section>
</template>
  