module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webdrivermanager: {
            out_dir: './selenium',
            capabilities: {
                browserName: 'chrome'
            },
            seleniumArgs: [],
            seleniumPort: 4444,
            ignore_ssl: false,
            proxy: false,
            method: 'GET',
            webdriverVersions: {
                selenium: '2.44.0',
                chromedriver: '2.12',
                iedriver: '2.44.0'
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    chromeDriver: "node_modules/webdriver-manager/selenium/chromedriver_2.27"
                }
            },
            all: {
                options: {
                    keepAlive: true
                }
            }
        },

        protractor_webdriver: {
            options: {
                path: 'node_modules/grunt-protractor-runner/node_modules/protractor/bin/',
                command: ['webdriver-manager update --standalone'],
                keepAlive: true
            }
        },

        cucumberjs: {
            src: 'tests',
            options: {
                //steps: 'node_modules/cucumber-mink/dist/step_definitions',
                format: 'pretty'
            }
        }

    });

    // Grunt Watch task listener
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', 'cucumberjs');
    grunt.registerTask('serve', ['protractor', 'cucumberjs']);

};