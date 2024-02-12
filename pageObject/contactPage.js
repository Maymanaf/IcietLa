import { expect } from '@playwright/test';

exports.ContactPage = class ContactPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page;
        this.contact_button = page.getByRole('link', { name: 'Nous contacter' });
        this.contactLogin_button = page.getByRole('link', { name: 'Se connecter' });
        this.contactFAQ_button = page.getByRole('link', { name: 'Voir la FAQ' });
        this.contactFirstname_textobx = page.getByLabel('Prénom');
        this.contactLastname_textbox = page.getByLabel('Nom', { exact: true });
        this.contactEmail_textbox = page.getByLabel('Email');
        this.contactPhone_textbox = page.getByPlaceholder('Téléphone');
        this.contactCategory_listbox = page.getByRole('button', { name: 'Catégorie' });
        this.contactCategory = page.getByText('Réservation', { exact: true });
        this.contactDestination_listbox = page.getByRole('button', { name: 'Destination' });
        this.contactDestination = page.getByText('Caraïbes - Saint Barthélemy - Pas de région - Pas de ville - Anse des Cayes');
        this.contactSubject_listbox = page.getByRole('button', { name: 'Votre demande concerne' });
        this.contactSubject = page.getByText('Comment faire si je ne reçois');
        this.contactMessage_textbox = page.getByLabel('Votre message');
        this.contactConsent_checkbox = page.getByLabel('J’ai pris connaissance de la');
        this.contactNewsletter_checkbox = page.getByLabel('J’accepte de recevoir des');
        this.contactSubmit_button = page.getByRole('button', { name: 'Envoyer ma demande' });
        this.successContact_message = page.getByRole('heading', { name: 'Votre demande a été envoyée' });
        this.fistnameContact_errorMessage = page.getByText('Ce champ est requis').first();
        this.lastnameContact_errorMessage = page.getByText('Ce champ est requis').nth(1);
        this.emailContact_errorMessage = page.getByText('L\'email n\'est pas valide');
        this.phoneContact_errorMessage = page.getByText('Le numéro n\'est pas valide');
        this.contentContact_errorMessage = page.getByText('Cette valeur est trop courte');
        this.consentContact_errorMessage = page.getByText('La case doit être cochée');

    }
    async contact() {

        await this.contactFirstname_textobx.fill('Pierre-John');
        await this.contactLastname_textbox.fill('Diplet');
        await this.contactEmail_textbox.fill('PierreJohn.diplet@fedesio.com');
        await this.contactPhone_textbox.fill('987654321');
        await this.contactCategory_listbox.click();
        await this.contactCategory.click();
        await this.contactDestination_listbox.click();
        await this.contactDestination.click();
        await this.contactSubject_listbox.click();
        await this.contactSubject.click();
        await this.contactMessage_textbox.fill(`Bonjour,

        Je me permets de vous contacter car j'ai récemment effectué une réservation sur votre site pour une chambre de villa et je rencontre quelques problèmes que j'aimerais résoudre.
        
        Je souhaiterais obtenir de l'aide pour modifier ma réservation.
        Serait-il possible de m'assister dans la résolution de ce problème ?
        
        Je vous remercie par avance pour votre attention et votre assistance. Vous pouvez me contacter par téléphone au [votre numéro de téléphone] ou par courriel à [votre adresse e-mail] pour toute information supplémentaire ou pour discuter des prochaines étapes.`);
        await this.contactConsent_checkbox.click();
        await this.contactNewsletter_checkbox.click();
        await this.contactSubmit_button.dblclick();;
    }
}