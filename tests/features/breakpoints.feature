Feature: Breakpoints
  In order to a good experience across viewports
  As a User
  I want to see ensure breakpoint settings are available

@breakpoints
Scenario: Breakpoints settings inside Drupal settings
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then the "drupalSettings.breakpoints_settings.chriskinch" object should contain "mobile"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "mobile_only"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "narrow"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "narrow_only"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "regular"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "regular_only"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "standard"
  And the "drupalSettings.breakpoints_settings.chriskinch" object should contain "wide"