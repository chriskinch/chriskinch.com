// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var {defineSupportCode} = require('cucumber');
var helpers = require('../support/helpers');

var baseURL = 'http://local.chriskinch.com';

defineSupportCode(function({Given, When, Then}) {

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

  Given('I am on the homepage', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get(baseURL);
  });

  Given('I browse to {arg1:stringInDoubleQuotes}', function (arg1) {
    return this.driver.get(baseURL + "/" + arg1);
  });

  Given('I am on {arg1:stringInDoubleQuotes}', function (arg1) {
    return this.driver.get(arg1);
  });

  Then('the {arg1:stringInDoubleQuotes} object should contain the key {arg2:stringInDoubleQuotes}', function (object, match) {
    this.driver.executeScript('return window[arguments[0]];', object).then(function(result) {
      assert.deepProperty(result, match, 'Key not found in "' + object + '"');
    });
  });

  Then('the {arg1:stringInDoubleQuotes} object should contain the keys', function (object, table) {
    this.driver.executeScript('return window[arguments[0]];', object).then(function(result) {
      for(var i=0; i < table.raw().length; i++) {
        assert.deepPropertyVal(result, table.raw()[i][0], table.raw()[i][1], 'Key not found in "' + object + '"');
      }
    });
  });

});