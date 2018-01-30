var ngrok = require('ngrok');
var compass = require('compass-importer');

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            paths: {
                base: '/',
                theme: {
                    base: 'themes/chriskinch',
                    sass: '<%= meta.paths.theme.base %>/sass',
                    css: '<%= meta.paths.theme.base %>/css',
                    js: '<%= meta.paths.theme.base %>/js',
                    fonts: '<%= meta.paths.theme.base %>/fonts',
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
                importer: compass,
                includePaths: [
                  'node_modules/sass-mq'
                ]
            },
            dist: {
                files: {
                    'css/styles.critical.css': 'sass/styles.critical.scss',
                    'css/styles.noncritical.css': 'sass/styles.noncritical.scss',
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },

        browserify: {
          'js/build/theme.js': ['js/theme.js']
        },

        pagespeed: {
            options: {
                nokey: true,
                locale: 'en_GB',
                threshold: 50
            },
            local_desktop: {
                options: {
                    strategy: 'desktop'
                }
            },
            local_mobile: {
                options: {
                    strategy: 'mobile'
                }
            },
            live_desktop: {
                options: {
                    url: 'http://stage.chriskinch.com',
                    strategy: 'desktop'
                }
            },
            live_mobile: {
                options: {
                    url: 'http://stage.chriskinch.com',
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
                files: ['js/src/*.js', 'js/theme.js'],
                tasks: ['compilejs']
            },
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['compilecss']
            }
        },

        fontello: {
            dist: {
                options: {
                    config  : 'fonts/fontello/config.json',
                    fonts   : 'fonts/fontello',
                    styles  : 'sass/config',
                    scss    : true,
                    exclude: [
                        'animation.css',
                        'fontello-ie7.css',
                        'fontello-ie7-codes.css',
                        'fontello-codes.css',
                        'fontello-embedded.css',
                        'fontello.eot',
                        'fontello.ttf',
                        'fontello.svg'
                    ],
                }
            },
        },

        'string-replace': {
            fonts: {
                files: {
                    'sass/config/_fontello.scss': 'sass/config/_fontello.scss',
                },
                options: {
                    replacements: [{
                        pattern: /.*(eot|ttf|svg).*\n\r*/gm,
                        replacement: ""
                    }, {
                        pattern: "format('woff'),",
                        replacement: "format('woff');"
                    }, {
                        pattern: "url",
                        replacement: 'src: url'
                    }, {
                        pattern: /..\/font\//g,
                        replacement: '<%= meta.paths.base %><%= meta.paths.theme.fonts %>/fontello/'
                    }]
                }
            }
        }

    });

    // Grunt Watch task listener
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['compilejs', 'compilecss']);
    grunt.registerTask('compilejs', ['jshint', 'browserify']);
    grunt.registerTask('compilecss', ['sass']);
    grunt.registerTask('compileicons', ['fontello', 'string-replace:fonts']);
    // Ngrok custom task
    grunt.registerTask('speed', 'Run pagespeed with ngrok', function() {
        var done = this.async();
        var opt = {
            host_header: 'chriskinch.com.drupal-8.x.dev'
        };
        ngrok.connect(opt, function(err, url) {
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