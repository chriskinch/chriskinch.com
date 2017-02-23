Feature: Breakpoints
  In order to a good experience across viewports
  As a User
  I want to see ensure breakpoint settings are available

@breakpoints
Scenario: Breakpoints settings inside Drupal settings as individuals
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.mobile"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.mobile_only"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.narrow"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.narrow_only"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.regular"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.regular_only"
  And the "drupalSettings" object should contain the key "breakpoints_settings.chriskinch.standard"


@breakpoints
Scenario: Breakpoints settings inside Drupal settings as a table
  Given I browse "http://local.chriskinch.com"
  And I am on the homepage
  Then the "drupalSettings" object should contain the keys
    | breakpoints_settings.chriskinch.mobile       | (min-width: 0em)                                      |
    | breakpoints_settings.chriskinch.mobile_only  | screen and (max-width: 519px)                         |
    | breakpoints_settings.chriskinch.narrow       | screen and (min-width: 620px)                         |
    | breakpoints_settings.chriskinch.narrow_only  | screen and (min-width: 620px) and (max-width: 959px)  |
    | breakpoints_settings.chriskinch.regular      | screen and (min-width: 960px)                         | 
    | breakpoints_settings.chriskinch.regular_only | screen and (min-width: 960px) and (max-width: 1199px) |
    | breakpoints_settings.chriskinch.standard     | only screen and (min-width: 38.125em)                 |
    | breakpoints_settings.chriskinch.wide         | screen and (min-width: 1200px)                        |