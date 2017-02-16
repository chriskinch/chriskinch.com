module.exports = function() {
  
  Mink.defineStep(/^the "([^"]*)" variable should contain "([^"]*)"$/, function (arg1, arg2) {
    // jdsfbuhfskb
    //console.log(driver);
    return driver.get('http://local.chriskinch.com');

    // driver.executeScript("console.log(drupalSettings) === 3;").then(function() {
    //   callback();
    // });
  
  });

};