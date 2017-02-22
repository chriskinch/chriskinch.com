// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Given('I am on the Cucumber.js GitHub repository', function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  When('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });

  Given('I browse {arg1:stringInDoubleQuotes}', function (arg1, callback) {
    this.driver.get(arg1);
     // Since we want the title from the page, we need to manually handle the Promise
    // this.driver.getTitle().then(function(title) {
    //   assert.equal(title, "Home | chriskinch.com");
    // });
    
  });

  Given('I am on the homepage', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    return true;
  });

  Then('the {arg1:stringInDoubleQuotes} variable should contain {arg2:stringInDoubleQuotes}', function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

});