Feature: Analytics
  In order to monitor site usage
  As an Owner
  I want to see Google Analytic code on the page

@analytics @homepage
Scenario: UA number is present on the homepage
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then I should see "UA-30551803-1"