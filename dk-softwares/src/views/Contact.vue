<script setup>

</script>

<template>
  <section class="pt-15 pl-33 pr-33 py-16 text-center overflow-hidden">
    <div class="pl-100 pr-100">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900">Fragen Sie noch heute ein Erstgespräch an!</h2>
            <p class="mt-1 text-sm/6 text-gray-600">Ich werde mich innerhalb von 24h nach Eingang der Kontaktanfrage mit Ihnen in Verbindung setzen.</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div class="sm:col-span-2">
                <label for="greeting" class="block text-sm/6 font-medium text-gray-900">Anrede</label>
                <div class="mt-2 grid grid-cols-1">
                  <select id="greeting" name="greeting" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option></option>
                    <option>Fr.</option>
                    <option>Hr.</option>
                  </select>
                  <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                </div>
              </div>

              <div class="sm:col-span-3 sm:col-start-1">
                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Vorname*</label>
                <div class="mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Nachnahme*</label>
                <div class="mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email*</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="phone" class="block text-sm/6 font-medium text-gray-900">Telefon</label>
                <div class="mt-2">
                  <input id="phone" name="phone" type="number" autocomplete="phone" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-4 mt-4">
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Firma*</label>
                <div class="mt-2">
                  <input id="company" name="company" type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label for="region" class="block text-sm/6 font-medium text-gray-900">Straße</label>
                <div class="mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">Postleitzahl*</label>
                <div class="mt-2">
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="city" class="block text-sm/6 font-medium text-gray-900">Stadt*</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

            </div>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <p class="mt-1 text-sm/6 text-gray-600">
              Die mit einem (*) gekennzeichneten Felder sind Pflichtfelder und müssen ausgefüllt werden. 
              Unter Datenschutz findest Du unsere Informationen gemäß Art. 13 DSGVO über den Datenschutz im Zusammenhang mit unserem Kontaktformular.
            </p>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" class="hover:cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Absenden</button>
        </div>
      </form>
    </div>
  </section>
</template>
