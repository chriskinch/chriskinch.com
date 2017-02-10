Feature: Slogan
  In order to monitor site usage
  As an Owner
  I want to see Google Analytic code on the page

@analytics @homepage
Scenario: Slogan is visible on the homepage
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then I should see "Hello. I'm Chris Kinch."