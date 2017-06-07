Feature: Analytics
  In order to monitor site usage
  As an Owner
  I want to see Google Analytic code on the page

@analytics @homepage @mink
Scenario: UA number is present on the homepage
  Given I am on "http://chriskinch.com.drupal-8.x.dev/node/3"
  Then I should see "UA-30551803-1"