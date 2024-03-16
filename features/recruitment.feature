@orange-hrm @recruitment
Feature: Recruitment - OrangeHRM

  Scenario Outline: As a user, I want to access Recruitment page

    Given I am on the login page
    And I login with "Admin" credential
    When I click "Recruitment" menu
    Then I can see "Recruitment" page
    And I choose to logout