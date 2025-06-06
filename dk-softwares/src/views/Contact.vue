<script setup>
  import {RouterLink} from 'vue-router'
  import { reactive, toRefs, ref} from 'vue';
  import { FwbBreadcrumb, FwbBreadcrumbItem, FwbAlert } from 'flowbite-vue';

   const status = ref(''); 

  const apiUrl = 'https://c96p63sypc.execute-api.eu-central-1.amazonaws.com/main/contact';

  const form = reactive({
    greeting: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    reachable: '',
    company: '',
    street_addr: '',
    postal_code: '',
    city: '',
    message: ''
  });

  function scroll_to_top() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }

  async function submitForm() {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          greeting: form.greeting,
          firstName: form.first_name,
          lastName: form.last_name,
          email: form.email,
          phone: form.phone,
          reachable: form.reachable,
          company: form.company,
          streetAddress: form.street_addr,
          postalCode: form.postal_code,
          city: form.city,
          messageText: form.message
        })
      });

      const resp = await response.json();
      if (!response.ok) {
        status.value = 'nok'; 
        console.log("nok bei if !response"); 
        console.error(resp.message);
        scroll_to_top(); 
        return;
      }
      status.value = 'ok';
      scroll_to_top(); 

      // Formular zurücksetzen
      Object.assign(form, {
        greeting: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        reachable: '',
        company: '',
        street_addr: '',
        postal_code: '',
        city: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      status.value = 'nok'; 
      scroll_to_top(); 
    }
  }
</script>

<template>
  <div class="pt-5 pl-33 pr-33 pb-5">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item home href="/" tag="router-link">
        Home
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item href="#">
        Contact
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
  </div>

  <!-- Heading -->
  <section class="pt-15 px-4 sm:px-6 lg:px-20 text-center overflow-hidden">
    <div class="px-4 sm:px-6 xl:px-110">

    <div v-if="status === 'ok'" class="mb-10">
      <fwb-alert closable icon type="success">
        Anfrage erfolgreich abgeschickt!
      </fwb-alert>
    </div>
    <div v-else-if="status === 'nok'" class="mb-10">
      <fwb-alert closable icon type="danger">
        Fehler beim Versenden der Anfrage aufgetreten. Bitte versuchen Sie es später noch einmal. 
      </fwb-alert>
    </div>
    <div v-else-if="status === 'miss'" class="mb-10">
      <fwb-alert closable icon type="warning">
        Bitte alle Pflichtfelder ausfüllen. 
      </fwb-alert>
    </div>

      <form @submit.prevent="submitForm">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900">
              Fragen Sie noch heute ein Erstgespräch an!
            </h2>
            <p class="mt-1 text-sm/6 text-gray-600">
              Ich werde mich innerhalb von 24 h nach Eingang der Kontaktanfrage mit Ihnen in Verbindung setzen.
            </p>

            <!-- Grid: auf Mobil 1 Spalte, ab sm (≥640px) 6 Spalten -->
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <!-- Anrede -->
              <div class="sm:col-span-2">
                <label for="greeting" class="block text-sm/6 font-medium text-gray-900">Anrede</label>
                <div class="mt-2 relative">
                  <select
                    id="greeting"
                    name="greeting"
                    v-model="form.greeting"
                    class="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option></option>
                    <option>Fr.</option>
                    <option>Hr.</option>
                  </select>
                  <ChevronDownIcon
                    class="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <!-- Vorname -->
              <div class="sm:col-span-3 sm:col-start-1">
                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">
                  Vorname<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    v-model="form.first_name"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Nachname -->
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">
                  Nachname<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    v-model="form.last_name"
                    autocomplete="family-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="sm:col-span-3">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">
                  Email<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    v-model="form.email"
                    autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Telefon -->
              <div class="sm:col-span-3">
                <label for="phone" class="block text-sm/6 font-medium text-gray-900">Telefon</label>
                <div class="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    v-model="form.phone"
                    autocomplete="tel"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Erreichbarkeit -->
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="reachable" class="block text-sm/6 font-medium text-gray-900">Erreichbarkeit</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="reachable"
                    id="reachable"
                    v-model="form.reachable"
                    placeholder="8-16"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Durchgehende Linie -->
              <div class="col-span-full">
                <hr class="border-t border-gray-900/10 mt-4" />
              </div>

              <!-- Firma -->
              <div class="sm:col-span-4 sm:mt-4">
                <label for="company" class="block text-sm/6 font-medium text-gray-900">
                  Firma<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    v-model="form.company"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Straße -->
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Straße</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    v-model="form.street_addr"
                    autocomplete="street-address"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Postleitzahl -->
              <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">
                  Postleitzahl<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    required
                    v-model="form.postal_code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Stadt -->
              <div class="sm:col-span-2">
                <label for="city" class="block text-sm/6 font-medium text-gray-900">
                  Stadt<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    v-model="form.city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- Linie -->
              <div class="col-span-full">
                <hr class="border-t border-gray-900/10 mt-4" />
              </div>

              <!-- Nachricht -->
              <div class="col-span-full">
                <label for="message" class="block text-sm/6 font-medium text-gray-900">
                  Nachricht<span class="text-red-500">*</span>
                </label>
                <div class="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    required
                    v-model="form.message"
                    rows="5"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  ></textarea>
                </div>
                <p class="mt-3 text-sm text-gray-600">
                  Bitte beschreiben Sie kurz Ihr Anliegen
                </p>
              </div>
            </div>

            <!-- Button + Hinweis -->
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Absenden
              </button>
            </div>

            <div class="border-t border-gray-900/10 pt-4 mt-4">
              <p class="mt-1 text-sm text-gray-600">
                Die mit einem (<span class="text-red-500">*</span>) gekennzeichneten Felder sind Pflichtfelder und
                müssen ausgefüllt werden. <br />
                Unter
                <a href="/impressum" tag="router-link" class="text-blue-500 hover:underline">Datenschutz</a>
                findest Du unsere Informationen gemäß Art. 13 DSGVO über den Datenschutz im Zusammenhang mit unserem
                Kontaktformular.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

