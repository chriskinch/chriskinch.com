module.exports = function() {

  require('chromedriver');

  var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  this.Given(/^I am over by "([^"]*)"$/, function (arg1, callback) {
    driver.get(arg1).then(callback);
  });

  this.Given(/^I am on "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

};