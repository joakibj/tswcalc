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
      build_dust: {
        src: ['build/templates/dusts/**/*.js'],
        dest: 'build/assets/javascripts/<%= pkg.name %>-dusts.js'
      },
      build_main: {
        src: [
          '<%= concat.build_main.dest %>',
          '<%= dirs.src %>/tswcalc.js',
          '<%= dirs.src %>/tswcalc-summary.js',
          '<%= dirs.src %>/tswcalc-selects.js',
          '<%= dirs.src %>/tswcalc-buttons.js',
          '<%= dirs.src %>/tswcalc-buttonbar.js',
          '<%= dirs.src %>/tswcalc-export.js',
          '<%= dirs.src %>/tswcalc-import.js'],
        dest: 'build/assets/javascripts/<%= pkg.name %>.js'
      },
      build_data: {
        src: [
          '<%= dirs.src %>/data/tswcalc-data-slots.js',
          '<%= dirs.src %>/data/tswcalc-data-gear.js',
          '<%= dirs.src %>/data/tswcalc-data-costs.js',
          '<%= dirs.src %>/data/tswcalc-data-mappings.js',
          '<%= dirs.src %>/data/tswcalc-data-signets.js',
          '<%= dirs.src %>/data/tswcalc-data-glyphs.js'],
        dest: 'build/assets/javascripts/<%= pkg.name %>-data.js'
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
          'dist/assets/javascripts/<%= pkg.name %>.min.js': ['<%= concat.build_main.dest %>'],
          'dist/assets/javascripts/<%= pkg.name %>-data.min.js': ['<%= concat.build_data.dest %>']
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
      },
      css: {
        files: ['public/assets/stylesheets/<%= pkg.name %>.css'],
        tasks: ['default']
      }
    },
    qunit: {
      all: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-dust');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['dust', 'concat', 'qunit', 'replace:develop', 'copy:develop']);
  grunt.registerTask('dist', ['dust', 'concat', 'qunit', 'uglify', 'replace:dist', 'copy:dist']);
};