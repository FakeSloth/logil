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

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['css/*.css'],
          dest: 'dist',
        }]
      }
    },


    uglify: {
      build: {
        src: ['js/*.js'],
        dest: 'dist/js/main.js'
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.sass', 'sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);

};
