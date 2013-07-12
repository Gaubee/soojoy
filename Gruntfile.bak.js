module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // open: {
    //   server: {
    //     url: 'http://localhost:<%= connect.options.port %>'
    //   }
    // },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        // hostname: 'localhost',
        hostname: '0.0.0.0',
        middleware: function(connect, options) {
          return [
            require('connect-livereload')({
              port: Number('<%= watch.options.livereload %>')
            }),

            // Serve static files.
            connect.static(options.base),

            // Make empty directories browsable.
            // connect.directory(options.base),
          ];
        }
      },
      server: {
        options: {
          keepalive: true,
          base: '',
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "style.css": "less/*.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          yuicompress: true
        },
        files: {
          "style.yui.css": "less/*.less"
        }
      }
    },
    watch:{
      options:{
        livereload:35729
      },
      css: {
        files:["less/*.less"],
        tasks:["less"]
      },
      script: {
        files:["js/*.js"]
      },
      html: {
        files:["*.html","tmpl/*.html"]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('connect-livereload');

  // Default task(s).
  grunt.registerTask('default', ['less','watch','connect']);
  grunt.registerTask('server', ['connect:server', 'watch:server']);

};