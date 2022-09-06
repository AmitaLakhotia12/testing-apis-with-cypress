const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // supportFile: false,
   etupNodeEvents(on, config) {
      // implement node event listeners here
    },
    },
});
