// conf.js
exports.config = {
    baseUrl: "http://local.test.com",
    framework: 'custom',
    frameworkPath: '/usr/lib/node_modules/protractor-cucumber-framework',
    seleniumAddress: "http://" + process.env.SELENIUM_MASTER_SERVICE_HOST + ":" + process.env.SELENIUM_MASTER_SERVICE_PORT + "/wd/hub",
    restartBrowserBetweenTests: true,
    onPrepare: function () {
        icx = require('./features/support/helpers.js');
    },
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
       'features/product/**/*.feature'],
    suites: {
      denypermissions: ['features/product/registration/denypermissions.feature'],
      registration: ['features/product/registration/register.feature']
    },
    cucumberOpts: {
        require: 'features/steps/**/*.js',
        format: 'pretty',
        showColors: true,
        tags: '@test'
    }
};