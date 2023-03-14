import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  experimentalWebKitSupport: true,
  e2e: {
    specPattern: 'tests/specs/**/*.spec.ts',
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    supportFile: 'tests/drivers/cypress/support/commands.js',
  },
})
