import { test, expect } from "@playwright/test";

test.describe("HomePage tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000"); 
  });

  test("should display the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/My Music App/);
  });

  test("should display song list", async ({ page }) => {
    await page.waitForSelector("ul li");
    const songItems = await page.locator("ul li").all();
    expect(songItems.length).toBeGreaterThan(0);
  });
  

  test("should filter songs based on search query", async ({ page }) => {
    const searchInput = page.getByPlaceholder("🔍 Search for a song..."); 
    await searchInput.fill("Blinding Lights");
    const songItems = await page.locator("ul li");
    await expect(songItems).toContainText("Blinding Lights");
  });

  test("should toggle favorite song", async ({ page }) => {
    await page.waitForSelector("button:has-text('❤️')");
    const heartButton = page.locator("button:has-text('❤️')").first();
    await heartButton.click();

    const favoriteList = page.locator("#favorites"); 
    await expect(favoriteList).toContainText("Blinding Lights");
  });
});
