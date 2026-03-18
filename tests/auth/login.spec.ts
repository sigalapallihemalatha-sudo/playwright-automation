
// Load local .env only when running locally
if (process.env.NODE_ENV !== "ci") {
  require('dotenv').config();
}

// Access credentials from environment variables
const URL = process.env.URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

console.log("URL:", URL, "USER:", USERNAME, "PASS:", PASSWORD); // Debug for CI/CD




import { test, expect } from '../../src/fixtures/baseFixture';
import { ENV } from '../../src/config/env';
import { testData } from '../../src/utils/testData';

test('Login Test', async ({ page, loginPage }) => {

  await page.goto(ENV.BASE_URL);

  // Use testData instead of hardcoding
  await loginPage.login(testData.username, testData.password);

  await expect(page).toHaveURL(/inventor/);
});