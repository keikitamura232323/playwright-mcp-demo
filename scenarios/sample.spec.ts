// scenarios/sample.spec.ts
import { test, expect } from '@playwright/test';

test('サンプルテスト', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
