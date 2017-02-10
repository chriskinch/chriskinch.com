module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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

};