// login.spec.ts

// Load .env only when running locally
if (!process.env.CI) {  // CI is automatically true in GitHub Actions
  require('dotenv').config();
}

import { test, expect } from '../../src/fixtures/baseFixture';
import { ENV } from '../../src/config/env';
import { testData } from '../../src/utils/testData';


// Read environment variables
const BASE_URL = process.env.BASE_URL!;
const USERNAME = process.env.TEST_USERNAME!;
const PASSWORD = process.env.TEST_PASSWORD!;

console.log("URL:", BASE_URL, "USER:", USERNAME); // Debug line






test('Login Test', async ({ page, loginPage }) => {

  await page.goto(ENV.BASE_URL);

  // Use testData instead of hardcoding
  await loginPage.login(testData.username, testData.password);

  await expect(page).toHaveURL(/inventor/);
});