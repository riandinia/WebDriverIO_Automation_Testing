const { $, expect } = require('@wdio/globals')
const Page = require('./page.js');

const sidenav = (menu) => $(`//*[text()="${menu}"]`);

// Variable type = const xxx = variable that does not need changes

    /**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    get fieldSearch () { 
        return $('.oxd-input oxd-input--active toggled'); }
    get userAdmin () { 
        return $('//*[@class="oxd-userdropdown-name"]'); }
    get profilePicture () { 
        return $('.oxd-userdropdown-tab'); }
    get menuLogout () { 
        return $('//*[text()="Logout"]'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async clickMenu(menu) {
        await (sidenav(menu)).click();
    }

    async clickLogoutMenu() {
        await (this.profilePicture).click();
        await (this.menuLogout).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/web/index.php/dashboard/index');
    }
}

module.exports = new HomePage();
