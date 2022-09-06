const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'io4tfr',
  e2e: {
   // supportFile: false,
   baseUrl: 'https://www.rijksmuseum.nl/api/nl'
       },
});