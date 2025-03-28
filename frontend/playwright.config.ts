import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    browserName: "chromium",
    headless: true, // Set to false if you want to see the browser
    baseURL: "http://localhost:3000", // Change if needed
    viewport: { width: 1280, height: 720 },
  },
});
