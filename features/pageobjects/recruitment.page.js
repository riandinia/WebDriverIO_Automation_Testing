const { $, expect } = require('@wdio/globals');
const Page = require('./page.js');

class RecruitmentPage extends Page {
    // NOTEL: element collection
    get headerRecruitment () { 
        return $('//h6[text()="Recruitment"]'); }

    async validatePage() {
        await expect(this.headerRecruitment).toBeDisplayed();
    }

    open () {
        return super.open('/web/index.php/recruitment/viewCandidates');
    }
}

module.exports = new RecruitmentPage();