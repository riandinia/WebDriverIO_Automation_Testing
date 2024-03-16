const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const LeavePage = require('../pageobjects/leave.page.js');
const RecruitmentPage = require('../pageobjects/recruitment.page.js');

const sidenav = {
  Leave: LeavePage,
  Recruitment: RecruitmentPage,
};

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with "(.*)" credential$/, async (user) => {
  await LoginPage.login(user);
});

When(/^I click "(.*)" menu$/, async (menu) => {
  await HomePage.clickMenu(menu);
});

Then(/^I can see "(.*)" page$/, async (page) => {
  await sidenav[page].validatePage();
});

Then(/^I choose to logout$/, async () => {
  await HomePage.clickLogoutMenu();
  await LoginPage.validatePage();
});