const { test, expect } = require('@playwright/test');
import dotenv from 'dotenv';
import { GuestBookPage } from '../pageObject/guestBookPage';
import { LoginPage } from '../pageObject/loginPage';



dotenv.config({
    path: 'ressources\\.env.credentials',
    override: true
})

let guestBookPO;
let loginPO;



test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPO = new LoginPage(page);
    guestBookPO = new GuestBookPage(page);



});


test('Submit postive review', async ({ page }) => {
    await loginPO.login(process.env.USERNAME, process.env.PASSWORD);
    await page.getByRole('link', { name: 'Lire les avis de nos visiteurs' }).first().click();
    await guestBookPO.postiveReview()
    await expect(guestBookPO.successReview_message).toBeVisible();
});