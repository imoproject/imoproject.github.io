import { test, expect } from '@playwright/test';

test('トップページが表示される', async ({ page }) => {
  await page.goto('http://localhost:8080/'); // HTMLを表示するURL
  await expect(page).toHaveTitle(/IMOPROJECT HOME|Example/); // title に応じて調整
});
