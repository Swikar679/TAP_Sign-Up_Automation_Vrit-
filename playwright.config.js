const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://authorized-partner.vercel.app/',
    headless: false,
    screenshot: 'only-on-failure',
  },
});