import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('//input[@formcontrolname="username"]');
    }

    public get nextButton() {
        return $('//button/*[text()="Next"]');
    }

    public get inputPassword() {
        return $('//input[@name="password"]');
    }

    public get logInButton() {
        return $('//button/span[text() ="Login"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string): Promise<void> {
        // browser.waitUntil()
        // const t0 = window.performance.now();
        await this.inputUsername.waitForDisplayed({ timeout: 15000});
        await this.inputUsername.click();
        await this.inputUsername.clearValue();
        await this.inputUsername.setValue(username);
        await this.nextButton.waitForDisplayed({ timeout: 15000});
        await this.nextButton.click();
        await browser.pause(5000);
        await this.inputPassword.waitForDisplayed({ timeout: 15000});
        await this.inputPassword.click();
        await this.inputPassword.clearValue();
        await this.inputPassword.setValue(password);
        await this.logInButton.waitForDisplayed({ timeout: 15000});
        await this.logInButton.click();
        // const t1 = performance.now();
        // console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('/auth/login');
    }
}

export default new LoginPage();
function timeout(timeout: any, arg1: number) {
    throw new Error('Function not implemented.');
}

