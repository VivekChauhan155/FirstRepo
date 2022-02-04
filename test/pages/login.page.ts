import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//input[@formcontrolname="username"]');
    }

    public get nextButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//button/*[text()="Next"]');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//input[@name="password"]');
    }

    public get logInButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//button/span[text() ="Login"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.nextButton.click();
        await this.inputPassword.setValue(password);
        await this.logInButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('/auth/login');
    }
}

export default new LoginPage();
