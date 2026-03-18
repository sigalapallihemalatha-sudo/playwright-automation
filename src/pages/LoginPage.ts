import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private username = this.page.locator('#user-name');
  private password = this.page.locator('#password');
  private loginBtn = this.page.locator('#login-button');

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}