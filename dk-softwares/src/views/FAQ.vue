<script setup>
  import { 
    FwbBreadcrumb, 
    FwbBreadcrumbItem,
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel } from 'flowbite-vue'

</script>

<template>
  <div class="pt-5 pl-33 pr-33 pb-5">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item home href="/" tag="router-link">
        Home
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item href="#">
        FAQ
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
  </div>

  <section class="pt-15 px-4 sm:px-6 lg:px-20 text-center overflow-hidden">
    <!-- Heading -->  
    <div class="px-4 sm:px-6 xl:px-110">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
        Frequently ask questions 
      </h1>
    </div>

    <!--FAQs-->
    <div class="text-left px-4 mt-20 mb-20 sm:px-6 xl:px-80">
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
    </div>
  </section>
</template>