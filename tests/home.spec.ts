// Playwright公式サイトのトップページに「Get started」というボタンが表示されることを確認するテスト

import { test, expect } from '@playwright/test';

test('Playwright公式サイトのトップページに「Get started」というリンクが表示されることを確認する', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // ボタンではなくリンクとして実装されているため、roleをlinkに変更
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});


// Playwright公式サイトで「Docs」リンクをクリックし、インストールページに遷移することを確認する

test('Docsページへの遷移テスト', async ({ page }) => {
    // トップページへ移動
    await page.goto('https://playwright.dev');

    // Docsリンクをクリック
    const docsLink = page.getByRole('link', { name: 'Docs' });
    await docsLink.click();

    // 正しいページタイトルを確認（Installation | Playwright）
    await expect(page).toHaveTitle('Installation | Playwright');
});


