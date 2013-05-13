module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dust: {
      default: {
        files: [{
          expand: true,
          cwd: 'src/templates/dusts/',
          src: ['*.dust'],
          dest: 'dist/templates/dusts/',
          ext: '.js'
        }],
        options: {
          relative: true,
          runtime: false,
          amd: false
        }
      },
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['dist/templates/dusts/*.js', 'src/javascript/<%= pkg.name %>.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'public/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
          'public/js/<%= pkg.name %>-data.min.js': ['src/javascript/<%= pkg.name %>-data.js']
        }
      }
    },
    watch: {
      dust: {
        files: ['src/templates/dusts/*.dust'],
        tasks: ['dust', 'concat', 'uglify']
      },
      javascript: {
        files: ['src/javascript/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-dust');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['dust', 'concat', 'uglify']);

};