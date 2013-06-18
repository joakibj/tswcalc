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
          }
        ],
        options: {
          relative: true,
          runtime: false,
          amd: false
        }
      }
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
            '<%= concat.build_dust.dest %>',
            '<%= dirs.src %>/<%= pkg.name %>.js',
            '<%= dirs.src %>/<%= pkg.name %>-summary.js',
            '<%= dirs.src %>/<%= pkg.name %>-selects.js',
            '<%= dirs.src %>/<%= pkg.name %>-buttons.js',
            '<%= dirs.src %>/<%= pkg.name %>-buttonbar.js',
            '<%= dirs.src %>/<%= pkg.name %>-export.js',
            '<%= dirs.src %>/<%= pkg.name %>-import.js',
            '<%= dirs.src %>/<%= pkg.name %>-util.js',
            '<%= dirs.src %>/<%= pkg.name %>-slots.js'
        ],
        dest: 'build/assets/javascripts/<%= pkg.name %>.js'
      },
      build_data: {
        src: [
            '<%= dirs.src %>/data/<%= pkg.name %>-data-slots.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-gear.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-costs.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-mappings.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-signets.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-glyphs.js'
        ],
        dest: 'build/assets/javascripts/<%= pkg.name %>-data.js'
      }
    },
    replace: {
      develop: {
        options: {
          variables: {
            'mainscript': '<%= pkg.name %>.js',
            'datascript': '<%= pkg.name %>-data.js',
            'version': '<%= pkg.version %>'
          }
        },
        files: [{
            src: ['public/index.html'],
            dest: 'build/index.html'
          }, {
            src: '<%= concat.build_main.dest %>',
            dest: '<%= concat.build_main.dest %>'
          }
        ]
      },
      dist: {
        options: {
          variables: {
            'mainscript': '<%= pkg.name %>.min.js',
            'datascript': '<%= pkg.name %>-data.min.js',
            'version': '<%= pkg.version %>'
          }
        },
        files: [{
            src: ['public/index.html'],
            dest: 'dist/index.html'
          }, {
            src: 'dist/assets/javascripts/<%= pkg.name %>.min.js',
            dest: 'dist/assets/javascripts/<%= pkg.name %>.min.js'
          }
        ]
      }
    },
    copy: {
      develop: {
        files: [{
            expand: true,
            cwd: 'public/',
            src: ['assets/**/*'],
            dest: 'build/'
          }
        ]
      },
      dist: {
        files: [{
            expand: true,
            cwd: 'public/',
            src: ['assets/**/*'],
            dest: 'dist/'
          }
        ]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> version <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
        files: ['<%= dirs.src %>/*.js'],
        tasks: ['default']
      },
      css: {
        files: ['public/assets/stylesheets/<%= pkg.name %>.css'],
        tasks: ['default']
      }
    },
    qunit: {
      all: ['test/**/*.html']
    },
    clean: {
      build: ['build'],
      dist: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-dust');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['dust', 'concat', 'replace:develop', 'copy:develop', 'qunit']);
  grunt.registerTask('dist', ['dust', 'concat', 'qunit', 'uglify', 'replace:dist', 'copy:dist']);
};