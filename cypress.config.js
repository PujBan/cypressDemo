const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js',
    screenshotOnRunFailure: true,
    pageLoadTimeout: 50000,
    //defaultCommandTimeout: 6000,
    chromeWebSecurity: false,
  },
});
