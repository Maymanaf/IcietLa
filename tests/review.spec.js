const { test, expect } = require('@playwright/test');
import dotenv from 'dotenv';
import { GuestBookPage } from '../pageObject/guestBookPage';
import { LoginPage } from '../pageObject/loginPage';
import { HomePage } from '../pageObject/homePage';

dotenv.config({
    path: 'ressources\\.env.credentials',
    override: true
})

let guestBookPO;
let loginPO;
let homePagePO;



test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPO = new LoginPage(page);
    guestBookPO = new GuestBookPage(page);
    homePagePO = new HomePage(page);



});

test('Submit postive review', async ({ page }) => {
    await loginPO.login(process.env.USERNAME, process.env.PASSWORD);
    await homePagePO.guestBookLinkPage.click();
    await guestBookPO.postiveReview();
    await expect(guestBookPO.successReview_message).toBeVisible();
});

test('No data review', async ({ page }) => {
    await loginPO.login(process.env.USERNAME, process.env.PASSWORD);
    await homePagePO.guestBookLinkPage.click();
    await guestBookPO.noDataReview();
    await expect(guestBookPO.reviewMsg_ErrorMsg).toBeVisible();
    await expect(guestBookPO.reviewConsent_ErrorMsg).toBeVisible();
    await expect(guestBookPO.reviewNote_ErrorMsg).toBeVisible();
    await expect(guestBookPO.reviewStay_ErrorMsg).toBeVisible();
    await expect(guestBookPO.reviewTitle_ErrorMsg).toBeVisible();
});

test('Check review', async ({ page }) => {
    await homePagePO.guestBookLinkPage.click();

    let sublimissimeVisible = false;
    await guestBookPO.nextPageGuestBook.click();
    while (!sublimissimeVisible) {
        try {
            await expect(guestBookPO.reviewVisibleTitle).toBeVisible();
            sublimissimeVisible = true;
        } catch (error) {
            // 'Sublimissime' element is not visible yet
            await page.waitForTimeout(1000);
            await guestBookPO.nextPageGuestBook.click();
        }
    }
    await expect(guestBookPO.reviewVisibleMessage).toBeVisible();
    await expect(guestBookPO.reviewVisibleWriter).toBeVisible();
    await guestBookPO.reviewShowMore.click();
    await expect(guestBookPO.reviewDestiniation).toBeVisible();
});


