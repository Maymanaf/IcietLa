
exports.HomePage = class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
    
        this.page = page;
       this.guestBookLinkPage = page.getByRole('link', { name: 'Lire les avis de nos visiteurs' }).first()
    }
}