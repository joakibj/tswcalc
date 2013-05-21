module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src/javascript'
    },
    dust: {
      default: {
        files: [{
          expand: true,
          cwd: 'src/templates/dusts/',
          src: ['**/*.dust'],
          dest: 'build/templates/dusts/',
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
      build: {
        src: [
          'build/templates/dusts/**/*.js',
          '<%= dirs.src %>/tswcalc.js',
          '<%= dirs.src %>/tswcalc-summary.js',
          '<%= dirs.src %>/tswcalc-selects.js',
          '<%= dirs.src %>/tswcalc-buttons.js',
          '<%= dirs.src %>/tswcalc-buttonbar.js',
          '<%= dirs.src %>/tswcalc-export.js',
          '<%= dirs.src %>/tswcalc-import.js'],
        dest: 'build/assets/javascripts/<%= pkg.name %>.js'
      }
    },
    replace: {
      develop: {
        options: {
          variables: {
            'mainscript': '<%= pkg.name %>.js',
            'datascript': '<%= pkg.name %>-data.js'
          }
        },
        files: [{
          src: ['public/index.html'],
          dest: 'build/index.html'
        }]
      },
      dist: {
        options: {
          variables: {
            'mainscript': '<%= pkg.name %>.min.js',
            'datascript': '<%= pkg.name %>-data.min.js'
          }
        },
        files: [{
          src: ['public/index.html'],
          dest: 'dist/index.html'
        }]
      }
    },
    copy: {
      develop: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: ['assets/**/*'],
          dest: 'build/'
        }, {
          expand: true,
          cwd: 'src/javascript/',
          src: ['tswcalc-data.js'],
          dest: 'build/assets/javascripts/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: ['assets/**/*'],
          dest: 'dist/'
        }]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/assets/javascripts/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>'],
          'dist/assets/javascripts/<%= pkg.name %>-data.min.js': ['src/javascript/<%= pkg.name %>-data.js']
        }
      }
    },
    watch: {
      dust: {
        files: ['src/templates/dusts/**/*.dust'],
        tasks: ['default']
      },
      javascript: {
        files: ['src/javascript/*.js'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-dust');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['dust', 'concat', 'replace:develop', 'copy:develop']);
  grunt.registerTask('dist', ['dust', 'concat', 'uglify', 'replace:dist', 'copy:dist']);
};