import { test, expect } from '@playwright/test';

test('Playwright公式ページが開ける', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });
  
