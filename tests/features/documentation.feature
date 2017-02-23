# features/documentation.feature
Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I click on "PORTFOLIO"
    Then I should see "Chris Kinch. Designer, developer, Drupal themer & all-round geek."