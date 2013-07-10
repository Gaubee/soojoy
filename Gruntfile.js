module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};