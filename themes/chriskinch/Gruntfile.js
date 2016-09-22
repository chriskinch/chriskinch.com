var ngrok = require('ngrok');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      jsPath: "js"
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "<%= meta.jsPath %>",
          mainConfigFile: "<%= meta.jsPath %>/<%= pkg.name %>.js",
          name: "main",
          out: "<%= meta.jsPath %>/build/<%= pkg.name %>.min.js",
          paths: {
              googlemap: "src/googlemap",
              enquire: "lib/enquire.js/dist/enquire.min",
              async: "plugins/async",
              savvior: "lib/savvior/dist/savvior.min",
              snapnav: "src/snapnav"
          },
          findNestedDependancies: true,
          preserveLicenseComments: false,
          optimize: 'uglify2'
        }
      }
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
    }

  });

  // Grunt Watch task listener
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Require optimisation task
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // Google page speed insights
  grunt.loadNpmTasks('grunt-pagespeed');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);
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