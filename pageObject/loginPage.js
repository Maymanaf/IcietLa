
exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
    
        this.page = page;

        //Login
        this.profilLogin_button = page.getByRole('button', { name: 'Mon compte' });
        this.username_textobx = page.getByLabel('Adresse Email');
        this.password_textbox = page.getByLabel('Mot de passe');
        this.login_button = page.getByRole('button', { name: 'Se connecter' });
        this.accountName = page.getByRole('button', { name: 'Aymen Testeur' });
        this.errorLogin_message = page.getByText('Error: Identifiants invalides.');

        //SingUP
        this.createAccount_button = page.getByRole('link', { name: 'Créer un compte' });
        this.firstName_textbox = page.getByLabel('Prénom');
        this.lastName_textbox = page.getByLabel('Nom', { exact: true });
        this.emailAddress_textbox = page.getByLabel('Adresse Email');
        this.phone_textbox = page.getByPlaceholder('Téléphone');
        this.newPassword_textbox = page.getByLabel('Mot de passe', { exact: true });
        this.confirmPassword_textbox = page.getByLabel('Confirmation du mot de passe');
        this.consent_checkbox = page.getByLabel('Je consens au traitement de');
        this.createAccountSubimt_button = page.getByRole('button', { name: 'Créer mon compte' });
        this.successSignup_message = page.getByRole('heading', { name: 'Votre compte a été créé avec' });
        this.firstNameError_message = page.getByText('Ce champ est requis').first();
        this.lastNameError_message = page.getByText('Ce champ est requis').nth(1);
        this.emailError_message = page.getByText("L'email n'est pas valide");
        this.phoneError_message = page.getByText("Le numéro n'est pas valide");
        this.newPwdError_message = page.getByText("Le mot de passe n'est pas").first();
        this.confirmPwdError_message = page.getByText("Le mot de passe n'est pas").nth(1);
        this.notConfirmPwdError_message = page.getByText("N'est pas égal au mot de passe");
    }
    async login(username, password) {
        await this.profilLogin_button.click();
        await this.username_textobx.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
        await this.page.waitForTimeout(2000);
    }
    async signup(userFirstname, userLastname, userEmail, userPhone, userNewPassword, userConfirmedPassword ) {
        await this.profilLogin_button.click();
        await this.createAccount_button.click();
        await this.firstName_textbox.fill(userFirstname);
        await this.lastName_textbox.fill(userLastname);
        await this.emailAddress_textbox.fill(userEmail);
        await this.phone_textbox.fill(userPhone);
        await this.newPassword_textbox.fill(userNewPassword);
        await this.confirmPassword_textbox.fill(userConfirmedPassword);
        await this.consent_checkbox.check();
        await this.createAccountSubimt_button.click();
    }
    async signupNoData() {
        await this.profilLogin_button.click();
        await this.createAccount_button.click();
        await this.createAccountSubimt_button.click();
    }
}