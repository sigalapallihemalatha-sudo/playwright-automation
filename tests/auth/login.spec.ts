import { test, expect } from '../../src/fixtures/baseFixture';
import { ENV } from '../../src/config/env';
import { testData } from '../../src/utils/testData';

test('Login Test', async ({ page, loginPage }) => {

  await page.goto(ENV.BASE_URL);

  // Use testData instead of hardcoding
  await loginPage.login(testData.username, testData.password);

  await expect(page).toHaveURL(/inventory/);
});