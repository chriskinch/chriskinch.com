Feature: Slogan
  In order to be warmly welcomed to the site
  As a User
  I want to see the site slogan introducing the developer

@branding @homepage
Scenario: Slogan is visible on the homepage
  Given I browse to "node/2"
  Then I should see "Designer, developer, Drupal themer & all-round geek."