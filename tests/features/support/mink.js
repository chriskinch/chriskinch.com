var Mink = require('cucumber-mink');

// Phantomjs - GhostDriver
var parameters = {
  driver: {
    desiredCapabilities: {
      browserName: 'phantomjs'
    },
    logLevel: 'silent', 
  }
};

module.exports = function () {
  Mink.init(this, parameters);
};