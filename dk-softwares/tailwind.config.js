module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js' // notwendig für Flowbite-Komponenten
  ],
  darkMode: false, // wichtig: Darkmode komplett deaktivieren
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // falls du Flowbite nutzt
  ],
}