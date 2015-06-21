module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/main.sass'],
        tasks: ['sass']
      }
    }

  });

  grunt.registerTask('build', ['sass']);

  grunt.registerTask('default', ['sass', 'watch']);

};
