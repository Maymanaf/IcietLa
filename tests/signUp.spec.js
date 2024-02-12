import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';
import dotenv from 'dotenv';
// Load environment variables from .env file

dotenv.config({
    path: '.env.userInfo',
    override: true
})

let loginPO;
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPO = new LoginPage(page);
});


test('SignUp - Cas Passant', async ({ page }) => {
    await loginPO.signup(process.env.USER_FIRSTNAME, process.env.USER_LASTNAME, process.env.USER_EMAIL, process.env.USER_PHONE, process.env.USER_NEWPASSWORD, process.env.USER_NEWPASSWORD);
    await expect(loginPO.successSignup_message).toBeVisible();
});

test('SignUp - No Data', async ({ page }) => {
    await loginPO.signupNoData();
    await expect(loginPO.firstNameError_message).toBeVisible();
    await expect(loginPO.lastNameError_message).toBeVisible();
    await expect(loginPO.emailError_message).toBeVisible();
    await expect(loginPO.phoneError_message).toBeVisible();
    await expect(loginPO.newPwdError_message).toBeVisible();
    await expect(loginPO.confirmPwdError_message).toBeVisible();

});

test('SignUp - Invalid Data', async ({ page }) => {
    await loginPO.signup(process.env.USER_FIRSTNAME, process.env.USER_LASTNAME, process.env.INVALID_USER_EMAIL, process.env.INVALID_USER_PHONE, process.env.INVALID_USER_NEWPASSWORD, process.env.INVALID_USER_PASSWORD);
    await expect(loginPO.emailError_message).toBeVisible();
    await expect(loginPO.phoneError_message).toBeVisible();
    await expect(loginPO.newPwdError_message).toBeVisible();
    await expect(loginPO.notConfirmPwdError_message).toBeVisible();
});


