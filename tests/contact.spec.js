const { test, expect } = require('@playwright/test');
import { ContactPage } from '../pageObject/contactPage';
import { LoginPage } from '../pageObject/loginPage';
import dotenv from 'dotenv';

dotenv.config({
    path: 'ressources\\.env.credentials',
    override: true
})

let contactPO;
let loginPO;
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPO = new LoginPage(page);
    contactPO = new ContactPage(page);
    await contactPO.contact_button.click();
});
test('Submit Contact message - User not logged in', async ({ page }) => {
    await expect(contactPO.contactLogin_button).toHaveAttribute('href', '/contact');
    await expect(contactPO.contactFAQ_button).toHaveAttribute('href', '/faq');
    await contactPO.contact();
    await expect(contactPO.successContact_message).toBeVisible();

});
//
test('Submit Contact message - Logged in user', async ({ page }) => {
    await loginPO.login(process.env.USERNAME, process.env.PASSWORD);
    await expect(contactPO.contactLogin_button).toBeHidden();
    await expect(contactPO.contactFAQ_button).toHaveAttribute('href', '/faq');
    await contactPO.contact();
    await expect(contactPO.successContact_message).toBeVisible();

});

test('Contact - No Data', async ({ page }) => {
    await contactPO.contactSubmit_button.dblclick();
    await expect(contactPO.fistnameContact_errorMessage).toBeVisible();
    await expect(contactPO.lastnameContact_errorMessage).toBeVisible();
    await expect(contactPO.emailContact_errorMessage).toBeVisible();
    await expect(contactPO.phoneContact_errorMessage).toBeVisible();
    await expect(contactPO.contentContact_errorMessage).toBeVisible();
    await expect(contactPO.consentContact_errorMessage).toBeVisible();


});  
