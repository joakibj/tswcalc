path = require('path');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src/javascript',
      build: 'build',
      dist: 'dist'
    },
    dust: {
      default: {
        files: [{
            expand: true,
            cwd: 'src/templates/dusts/',
            src: ['**/*.dust'],
            dest: '<%= dirs.build %>/templates/dusts/',
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
        src: ['<%= dirs.build %>/templates/dusts/**/*.js'],
        dest: '<%= dirs.build %>/assets/javascripts/<%= pkg.name %>-dusts.js'
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
            '<%= dirs.src %>/<%= pkg.name %>-slots.js',
            '<%= dirs.src %>/<%= pkg.name %>-checkbox.js',
            '<%= dirs.src %>/<%= pkg.name %>-miscslot.js'
        ],
        dest: '<%= dirs.build %>/assets/javascripts/<%= pkg.name %>.js'
      },
      build_data: {
        src: [
            '<%= dirs.src %>/data/<%= pkg.name %>-data-slots.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-gear.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-costs.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-mappings.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-signets.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-glyphs.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-nyraid.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-cadoro.js',
            '<%= dirs.src %>/data/<%= pkg.name %>-data-consumables.js'
        ],
        dest: '<%= dirs.build %>/assets/javascripts/<%= pkg.name %>-data.js'
      }
    },
    replace: {
      develop: {
        options: {
          variables: {
            'mainscript': '<%= pkg.name %>.js',
            'datascript': '<%= pkg.name %>-data.js',
            'maincss': '<%= pkg.name %>.css',
            'version': '<%= pkg.version %>',
            'pathsep': path.sep
          }
        },
        files: [{
            src: ['public/index.html'],
            dest: '<%= dirs.build %>/index.html'
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
            'maincss': '<%= pkg.name %>.min.css',
            'version': '<%= pkg.version %>',
            'pathsep': path.sep
          }
        },
        files: [{
            src: ['public/index.html'],
            dest: '<%= dirs.dist %>/index.html'
          }, {
            src: '<%= dirs.dist %>/assets/javascripts/<%= pkg.name %>.min.js',
            dest: '<%= dirs.dist %>/assets/javascripts/<%= pkg.name %>.min.js'
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
            dest: '<%= dirs.build %>/'
          }
        ]
      },
      dist: {
        files: [{
            expand: true,
            cwd: 'public/',
            src: ['assets/**/*'],
            dest: '<%= dirs.dist %>/'
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
          '<%= dirs.dist %>/assets/javascripts/<%= pkg.name %>.min.js': ['<%= concat.build_main.dest %>'],
          '<%= dirs.dist %>/assets/javascripts/<%= pkg.name %>-data.min.js': ['<%= concat.build_data.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        banner: '/* minified CSS */\n'
      },
      dist: {
        files: {
          '<%= dirs.dist %>/assets/stylesheets/<%= pkg.name %>.min.css' : ['public/assets/stylesheets/<%= pkg.name %>.css']
        }
      }
    },
    watch: {
      dust: {
        files: ['src/templates/dusts/**/*.dust'],
        tasks: ['build']
      },
      javascript: {
        files: ['<%= dirs.src %>/*.js'],
        tasks: ['build']
      },
      css: {
        files: ['public/assets/stylesheets/<%= pkg.name %>.css'],
        tasks: ['build']
      }
    },
    qunit: {
      all: ['test/**/*.html']
    },
    clean: {
      build: ['<%= dirs.build %>'],
      dist: ['<%= dirs.dist %>'],
      pack: ['<%= compress.dist.options.archive %>']
    },
    compress: {
      dist: {
        options: {
          archive: '<%= pkg.name %>-<%= pkg.version %>.zip',
          mode: 'zip'
        },
        files: [
          {expand: true, cwd: 'dist/', src: '**/*'}
        ]
      }
    },
    release: {
      options: {
        push: false,
        pushTags: false,
        npm: false,
        commitMessage: 'Prepare version <%= version %>',
        tagMessage: 'Release version <%= version %>'
      }
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
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('build', ['dust', 'concat', 'replace:develop', 'copy:develop']);
  grunt.registerTask('default', ['build', 'qunit']);
  grunt.registerTask('test', ['default']);
  grunt.registerTask('dist', ['dust', 'concat', 'uglify', 'cssmin', 'replace:develop', 'replace:dist', 'copy:develop', 'copy:dist', 'qunit']);
  grunt.registerTask('package', ['dist', 'compress']);
};
