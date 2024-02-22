const { clear } = require('console');

exports.GuestBookPage = class GuestBookPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {


        this.page = page;
        this.review_Button = page.getByRole('button', { name: 'Laisser une note' });
        this.reviewStay = page.getByLabel('Séjour');
        this.myReviewStay = page.getByText('Stellae');
        this.reviewTitle_textbox = page.getByLabel('Titre');
        this.reviewMessage_textbox = page.getByLabel('Votre message');
        this.reviewConsent_checkbox = page.getByLabel('J’autorise la publication de');
        this.reviewPicture_button = page.getByText('Ajoutez une photo de votre sé');
        this.excellentReview_icon = page.locator('xpath=//label[5]//div[1]');
        this.submitReview_button = page.getByRole('button', { name: 'Envoyer' });
        this.successReview_message = page.getByRole('heading', { name: 'Votre note a été envoyée' });
        this.nextPageGuestBook = page.getByRole('button', { name: 'next' });
        this.reviewVisibleTitle = page.getByRole('heading', { name: 'Luxe Tropical' });
        this.reviewVisibleMessage = page.getByText('Paul Pogba');
        this.reviewVisibleWriter = page.getByText('Ma récente expérience à la');
        this.reviewShowMore = page.locator("xpath=//h3[normalize-space()='Luxe Tropical']/parent::*/parent::*//a[normalize-space()='Afficher plus']");
        this.reviewDestiniation = page.getByLabel('breadcrumb').getByText('Stellae');
        this.reviewMsg_ErrorMsg= page.getByText('Cette valeur est trop courte');
        this.reviewConsent_ErrorMsg = page.getByText('La case doit être cochée');
        this.reviewNote_ErrorMsg = page.getByText('Veuillez renseigner une note');
        this.reviewStay_ErrorMsg = page.getByText('Ce champ est requis').first();
        this.reviewTitle_ErrorMsg = page.getByText('Ce champ est requis').nth(1);
    }
    async postiveReview() {
        await this.review_Button.click();
        await this.reviewStay.click();
        await this.myReviewStay.click();
        await this.reviewTitle_textbox.fill('Sublimissime');
        await this.reviewMessage_textbox.fill("Exactly as advertised: Ce sont mes meilleures vacances.... L'endroit est calme et reposant. La maison est spacieuse, décorée avec goût et hyper équipée. Il ne manque rien!");

        const fileInput = await this.page.$("input[type='file']");
        if (!fileInput) {
            throw new Error("File input element not found.");
        }
        const filePath = 'ressources/396111.jpg';
        await fileInput.setInputFiles(filePath);
        await this.page.waitForTimeout(1000);
        await this.reviewConsent_checkbox.check();
        await this.excellentReview_icon.click();
        await this.submitReview_button.click();
    }

    async noDataReview() {
        await this.review_Button.click();

        const fileInput = await this.page.$("input[type='file']");
        if (!fileInput) {
            throw new Error("File input element not found.");
        }
        const filePath = 'ressources/396111.jpg';
        await fileInput.setInputFiles(filePath);
        await this.page.waitForTimeout(1000);
        await this.submitReview_button.click();
    }
    
}