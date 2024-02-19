const { test, expect } = require('@playwright/test');
import dotenv from 'dotenv';
import { LoginPage } from '../pageObject/loginPage';
// Load environment variables from .env file

dotenv.config({
  path: 'ressources\\.env.credentials',
  override: true
})

let loginPO;
test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPO = new LoginPage(page);
});

test('Authentification - Cas Passant', async ({ page }) => {

  await loginPO.login(process.env.USERNAME, process.env.PASSWORD);
  await expect(loginPO.accountName).toBeVisible();

});

test('Authentification - Password Invalid', async ({ page }) => {
  await loginPO.login(process.env.USERNAME, process.env.INVALID_PASSWORD);
  await expect(loginPO.errorLogin_message).toBeVisible();
});

test('Authentification - Email Invalid', async ({ page }) => {
  await loginPO.login(process.env.INVALID_USERNAME, process.env.PASSWORD);
  await expect(loginPO.errorLogin_message).toBeVisible();

});