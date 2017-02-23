// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var {defineSupportCode} = require('cucumber');
var helpers = require('../support/helpers');

var baseURL = 'http://local.chriskinch.com';

defineSupportCode(function({Given, When, Then}) {

  Given('I am on the Cucumber.js GitHub repository', function() {
    return this.driver.get('http://local.chriskinch.com');
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

  Given('I browse {arg1:stringInDoubleQuotes}', function (arg1) {
    return this.driver.get(arg1);    
  });

  Given('I am on the homepage', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get(baseURL);
  });

  Then('the {arg1:stringInDoubleQuotes} object should contain {arg2:stringInDoubleQuotes}', function (objString, match) {
    // Split the object string and pass first to be executed
    var objArray = objString.split(".");
    var parent = objArray.shift();
    var lookup = objArray.join(".");


    console.log(parent);
    console.log(lookup);

    this.driver.executeScript('return window[arguments[0]];', parent).then(function(result) {
      var object = helpers.objRef(result, lookup);
      assert.property(object, match, 'Key not found in "' + objString + '"');
    });
  });

});