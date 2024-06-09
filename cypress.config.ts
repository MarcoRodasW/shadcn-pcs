import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
    specPattern: ['__test__/components/**/*.cy.{js,jsx,ts,tsx}', 'src/components/**/__test__/**/*.cy.{js,jsx,ts,tsx}'],
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    specPattern: ['__test__/e2e/**/*.cy.{js,jsx,ts,tsx}', 'src/app/**/__test__/**/*.cy.{js,jsx,ts,tsx}'],
  },
});
