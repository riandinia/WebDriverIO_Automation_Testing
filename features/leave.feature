@orange-hrm @leave
Feature: Leave - OrangeHRM

  Scenario Outline: As a user, I want to access Leave page

    Given I am on the login page
    And I login with "Admin" credential
    When I click "Leave" menu
    Then I can see "Leave" page
    And I choose to logout