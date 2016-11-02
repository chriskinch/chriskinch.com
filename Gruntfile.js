var ngrok = require('ngrok');
var compass = require('compass-importer');

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            paths: {
                theme: {
                    base: 'themes/chriskinch',
                    sass: '<%= meta.paths.theme.base %>/sass',
                    css: '<%= meta.paths.theme.base %>/css',
                    js: '<%= meta.paths.theme.base %>/js',
                }
            }
        },

        jshint: {
          files: ['Gruntfile.js', 'js/src/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        sass: {
            options: {
                sourceMap: true,
                importer: compass
            },
            dist: {
                files: {
                    '<%= meta.paths.theme.css %>/styles.critical.css': '<%= meta.paths.theme.sass %>/styles.critical.scss',
                    '<%= meta.paths.theme.css %>/styles.css': '<%= meta.paths.theme.sass %>/styles.scss'
                }
            }
        },

        browserify: {
          '<%= meta.paths.theme.js %>/build/theme.js': ['<%= meta.paths.theme.js %>/theme.js']
        },

        pagespeed: {
            options: {
                nokey: true,
                locale: 'en_GB',
                threshold: 50
            },
            local_desktop: {
                options: {
                    url: 'http://chriskinch.ngrok.com',
                    strategy: 'desktop'
                }
            },
            local_mobile: {
                options: {
                    url: 'http://chriskinch.ngrok.com',
                    strategy: 'mobile'
                }
            },
            live_desktop: {
                options: {
                    url: 'http://chriskinch.com',
                    strategy: 'desktop'
                }
            },
            live_mobile: {
                options: {
                    url: 'http://chriskinch.com',
                    strategy: 'mobile'
                }
            }
        },

        watch: {
            config: {
                files: ['Gruntfile.js'],
                tasks: ['jshint']
            },
            scripts: {
                files: ['<%= meta.paths.theme.js %>/src/**/*.js'],
                tasks: ['compilejs']
            },
            styles: {
                files: ['<%= meta.paths.theme.sass %>/**/*.scss'],
                tasks: ['compilecss']
            }
        }

    });

    // Grunt Watch task listener
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['compilejs', 'compilecss']);
    grunt.registerTask('compilejs', ['jshint', 'browserify']);
    grunt.registerTask('compilecss', ['sass']);
    // Ngrok custom task
    grunt.registerTask('speed', 'Run pagespeed with ngrok', function() {
        var done = this.async();
        var port = 80;
        ngrok.connect(port, function(err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

};