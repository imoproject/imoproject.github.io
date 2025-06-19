import { test, expect } from '@playwright/test';

test('トップページが表示される', async ({ page }) => {
  await page.goto('http://localhost:8080/'); // HTMLを表示するURL
  await expect(page).toHaveTitle(/My Site|Example/); // title に応じて調整
});
