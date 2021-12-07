'use strict';

var serveFavicon = require('serve-favicon');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var files = require('./ultimateFiles').files;
var mergeFilesFor = require('./ultimateFiles').mergeFilesFor;
var util = require('./lib/grunt/utils.js');
var versionInfo = require('./lib/versions/version-info');
var path = require('path');

var semver = require('semver');
var exec = require('shelljs').exec;
var pkg = require(__dirname + '/package.json');

var docsScriptFolder = util.docsScriptFolder;

// Node.js version checks
if (!semver.satisfies(process.version, pkg.engines.node)) {
  reportOrFail('Invalid node version (' + process.version + '). ' +
               'Please use a version that satisfies ' + pkg.engines.node);
}

// Yarn version checks
var expectedYarnVersion = pkg.engines.yarn;
var currentYarnVersion = exec('yarn --version', {silent: true}).stdout.trim();
if (!semver.satisfies(currentYarnVersion, expectedYarnVersion)) {
  reportOrFail('Invalid yarn version (' + currentYarnVersion + '). ' +
               'Please use a version that satisfies ' + expectedYarnVersion);
}

// Grunt CLI version checks
var expectedGruntVersion = pkg.engines['grunt-cli'];
var currentGruntVersions = exec('grunt --version', {silent: true}).stdout;
var match = /^grunt-cli v(.+)$/m.exec(currentGruntVersions);
if (!match) {
  reportOrFail('Unable to compute the current grunt-cli version. We found:\n' +
               currentGruntVersions);
} else {
  if (!semver.satisfies(match[1], expectedGruntVersion)) {
  reportOrFail('Invalid grunt-cli version (' + match[1] + '). ' +
               'Please use a version that satisfies ' + expectedGruntVersion);
  }
}

// Ensure Node.js dependencies have been installed
if (!process.env.CI) {
  var yarnOutput = exec('yarn install');
  if (yarnOutput.code !== 0) {
    throw new Error('Yarn install failed: ' + yarnOutput.stderr);
  }
}

module.exports = function(grunt) {

  // this loads all the node_modules that start with `grunt-` as plugins
  require('load-grunt-tasks')(grunt);

  // load additional grunt tasks
  grunt.loadTasks('lib/grunt');
  // grunt.loadNpmTasks('angular-benchpress');

  // compute version related info for this build
  var NG_VERSION = versionInfo.currentVersion;
  NG_VERSION.cdn = versionInfo.cdnVersion;
  var dist = 'angular-' + NG_VERSION.full;

  var deployVersion = NG_VERSION.full;

  if (NG_VERSION.isSnapshot) {
    deployVersion = NG_VERSION.distTag === 'latest' ? 'snapshot-stable' : 'snapshot';
  }

  //config
  grunt.initConfig({
    NG_VERSION: NG_VERSION,
    bp_build: {
      options: {
        buildPath: 'build/benchmarks',
        benchmarksPath: 'benchmarks'
      }
    },

    clean: {
      build: ['build'],
      tmp: ['tmp'],
      deploy: [
        'deploy/docs',
        'deploy/code',
        docsScriptFolder + '/functions/html'
      ]
    },

    eslint: {
      all: {
        src: [
          '*.js',
          'benchmarks/**/*.js',
          'docs/**/*.js',
          'lib/**/*.js',
          'scripts/**/*.js',
          '!scripts/*/*/node_modules/**',
          'src/**/*.js',
          'test/**/*.js',
          'i18n/**/*.js',
          '!docs/app/assets/js/angular-bootstrap/**',
          '!docs/config/templates/**',
          '!src/ultimate.bind.js',
          '!i18n/closure/**',
          '!src/ngParseExt/ucd.js'
        ]
      }
    },

    build: {
      ultimate: {
        dest: 'build/u-ultimate.js',
        src: util.wrap([files['ultimateSrc']], 'ultimate'),
        styles: {
          css: ['css/ultimate.css'],
          generateCspCssFile: true,
          minify: true
        }
      }
    },


    min: {
      ultimate: 'build/u-ultimate.js'
    },


    'ddescribe-iit': {
      files: [
        'src/**/*.js',
        'test/**/*.js',
        '!src/ul/directive/attrs.js', // legitimate xit here
        '!test/helpers/privateMocks*.js'
      ],
      options: {
        disallowed: [
          'fit',
          'iit',
          'xit',
          'fthey',
          'tthey',
          'xthey',
          'fdescribe',
          'ddescribe',
          'xdescribe',
          'it.only',
          'describe.only'
        ]
      }
    },

    'merge-conflict': {
      files: [
        'src/**/*',
        'test/**/*',
        'docs/**/*',
        'css/**/*'
      ]
    },

    copy: {
      i18n: {
        files: [
          {
            src: 'src/ulLocale/**',
            dest: 'build/i18n/',
            expand: true,
            flatten: true
          }
        ]
      },
      deployFirebaseCode: {
        files: [
          {
            cwd: 'build',
            src: '**',
            dest: 'deploy/code/' + deployVersion + '/',
            expand: true
          }
        ]
      },
      deployFirebaseDocs: {
        files: [
          // The source files are needed by the embedded examples in the docs app.
          {
            src: ['build/angular*.{js,js.map,min.js}', 'build/sitemap.xml'],
            dest: 'deploy/docs/',
            expand: true,
            flatten: true
          },
          {
            cwd: 'build/docs',
            src: ['**', '!ptore2e/**', '!index*.html'],
            dest: 'deploy/docs/',
            expand: true
          },
          {
            src: 'build/docs/index-production.html',
            dest: 'deploy/docs/index.html'
          },
          {
            src: 'build/docs/index-production.html',
            dest: docsScriptFolder + '/functions/content/index.html'
          },
          {
            cwd: 'build/docs',
            src: 'partials/**',
            dest: docsScriptFolder + '/functions/content',
            expand: true
          }
        ]
      }
    },


    compress: {
      build: {
        options: {archive: 'build/' + dist + '.zip', mode: 'zip'},
        src: ['**'],
        cwd: 'build',
        expand: true,
        dot: true,
        dest: dist + '/'
      }
    },

    shell: {
      'install-node-dependencies': {
        command: 'yarn'
      },
      'promises-aplus-tests': {
        options: {
          stdout: false,
          stderr: true,
          failOnError: true
        },
        command: path.normalize('./node_modules/.bin/promises-aplus-tests tmp/promises-aplus-adapter++.js --timeout 2000')
      }
    },


    write: {
      versionTXT: {file: 'build/version.txt', val: NG_VERSION.full},
      versionJSON: {file: 'build/version.json', val: JSON.stringify(NG_VERSION)}
    },

    bump: {
      options: {
        files: ['package.json'],
        commit: false,
        createTag: false,
        push: false
      }
    }
  });

  //alias tasks
  grunt.registerTask('minify', [
    'clean',
    'build',
    'minall'
  ]);
  grunt.registerTask('package', [
    'validate-ultimate-files',
    'clean',
    'buildall',
    'minall',
    'collect-errors',
    'write',
    'docs',
    'copy:i18n',
    'compress:build'
  ]);
  grunt.registerTask('ci-checks', [
    'ddescribe-iit',
    'merge-conflict',
    'eslint'
  ]);
  grunt.registerTask('default', ['package']);
};


function reportOrFail(message) {
  if (process.env.CI) {
    throw new Error(message);
  } else {
    console.log('===============================================================================');
    console.log(message);
    console.log('===============================================================================');
  }
}
