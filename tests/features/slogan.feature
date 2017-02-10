Feature: Slogan
  In order to be warmly welcomed to the site
  As a User
  I want to see the site slogan introducing the developer

@branding @homepage
Scenario: Slogan is visible on the homepage
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then I should see "Hello. I'm Chris Kinch."