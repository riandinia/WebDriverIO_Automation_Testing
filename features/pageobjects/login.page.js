const { $, expect } = require('@wdio/globals')
const Page = require('./page.js');

// Variable type = const xxx = variable that does not need changes
const element = {
    inputUsername: $('[name="username"]'),
    inputPassword: $('[name="password"]'),
    buttonLogin: $('.orangehrm-login-button'),
}

    /**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login(user) {
        console.log(`Username: ${process.env.Username}`)
        console.log(`Password: ${process.env.Password}`)

        await element.inputUsername.waitForDisplayed({ timeout: 3000 });
        await element.inputUsername.setValue(process.env.Username);
        await element.inputPassword.setValue(process.env.Password);
        await element.buttonLogin.click();
    }

    async validatePage() {
        await expect(browser).toHaveUrl(expect.stringContaining('/web/index.php/auth/login'));
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/web/index.php/auth/login');
    }
}

module.exports = new LoginPage();
