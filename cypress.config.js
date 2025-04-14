const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    fixturesFolder: 'cypress/fixtures'
  },
  env: {
    standard_user: 'standard_user',
    locked_out_user: 'locked_out_user',
    password: 'secret_sauce',
  },
});
