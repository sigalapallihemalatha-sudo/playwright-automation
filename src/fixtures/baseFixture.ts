import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

//  DEFINE TYPE
type MyFixtures = {
  loginPage: LoginPage;
};

//  USE TYPE HERE
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';