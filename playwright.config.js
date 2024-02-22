
import { defineConfig } from '@playwright/test';


// Read from default ".env" file.
require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**spec.js',
  // testIgnore: /.signUp.spec.js/,
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: 'test-results',
  /* Run tests in files in parallel */
  fullyParallel: true,
  workers: '50%',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["allure-playwright"],
    // ['./reporter.js']
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://front.icietla.staging.fides.io/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    launchOptions: {
      //args: ["--start-maximized"],
      args: ['--window-size=1920,1040'],
    },
  
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { viewport: null },
    },

    {
      name: 'firefox',
      use: { viewport: null },
    },

    {
      name: 'webkit',
      use: { viewport: null },
    },
  ],
});
