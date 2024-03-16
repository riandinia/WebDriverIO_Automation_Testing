const { $, expect } = require('@wdio/globals')
const Page = require('./page.js');

class LeavePage extends Page {
    // NOTEL: element collection
    get headerLeave () { 
        return $('//h6[text()="Leave"]'); }
    
    async validatePage() {
        await expect(this.headerLeave).toBeDisplayed();
    }

    open () {
        return super.open('/web/index.php/leave/viewLeaveList');
    }
}

module.exports = new LeavePage();