Feature: Breakpoints
  In order to a good experience across viewports
  As a User
  I want to see ensure breakpoint settings are available

@breakpoints
Scenario: Breakpoints settings inside Drupal settings
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.mobile"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.mobile_only"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.narrow"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.narrow_only"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.regular"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.regular_only"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.standard"
  #And the "drupalSettings" variable should contain "breakpoint_settings.chriskinch.wide"