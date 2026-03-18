// login.spec.ts

// Load .env only when running locally
if (!process.env.CI) {
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

  await page.goto(BASE_URL);

  // Use testData instead of hardcoding
  await loginPage.login(USERNAME, PASSWORD);

  await expect(page).toHaveURL(/inventor/);
});