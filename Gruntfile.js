module.exports = function (grunt) {
  'use strict';

  //load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('connect-livereload');

  //define tasks
  grunt.registerTask('server', ['connect:server',  'watch']);

  //grunt config
  grunt.initConfig({
    //======== 配置相关 ========
    pkg: grunt.file.readJSON('package.json'),
    src: '',

    //======== 开发相关 ========
    //开启服务
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
          // keepalive: true,
          base: '<%= src %>',
        }
      }
    },

    //打开浏览器
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
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
        files:["*.html","tmpl/*.html","tmpl/*.lbi"]
      }
    }


  });
};