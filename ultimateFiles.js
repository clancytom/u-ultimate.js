'use strict';

var ultimateFiles = {
  'ultimateSrc': [
    'src/minErr.js',
    'src/Ultimate.js',
    'src/loader.js',
    'src/shallowCopy.js',
    'src/stringify.js',
    'src/UltimatePublic.js',
    'src/jqLite.js',
    'src/apis.js',

    'src/auto/injector.js',

    'src/ul/anchorScroll.js',
    'src/ul/animate.js',
    'src/ul/animateRunner.js',
    'src/ul/animateCss.js',
    'src/ul/browser.js',
    'src/ul/cacheFactory.js',
    'src/ul/compile.js',
    'src/ul/controller.js',
    'src/ul/document.js',
    'src/ul/exceptionHandler.js',
    'src/ul/forceReflow.js',
    'src/ul/http.js',
    'src/ul/httpBackend.js',
    'src/ul/interpolate.js',
    'src/ul/interval.js',
    'src/ul/intervalFactory.js',
    'src/ul/jsonpCallbacks.js',
    'src/ul/locale.js',
    'src/ul/location.js',
    'src/ul/log.js',
    'src/ul/parse.js',
    'src/ul/q.js',
    'src/ul/raf.js',
    'src/ul/rootScope.js',
    'src/ul/rootElement.js',
    'src/ul/sanitizeUri.js',
    'src/ul/sce.js',
    'src/ul/sniffer.js',
    'src/ul/taskTrackerFactory.js',
    'src/ul/templateRequest.js',
    'src/ul/testability.js',
    'src/ul/timeout.js',
    'src/ul/urlUtils.js',
    'src/ul/window.js',
    'src/ul/cookieReader.js',

    'src/ul/filter.js',
    'src/ul/filter/filter.js',
    'src/ul/filter/filters.js',
    'src/ul/filter/limitTo.js',
    'src/ul/filter/orderBy.js',

    'src/ul/directive/directives.js',
    'src/ul/directive/a.js',
    'src/ul/directive/attrs.js',
    'src/ul/directive/form.js',
    'src/ul/directive/input.js',
    'src/ul/directive/ngBind.js',
    'src/ul/directive/ngChange.js',
    'src/ul/directive/ngClass.js',
    'src/ul/directive/ngCloak.js',
    'src/ul/directive/ngController.js',
    'src/ul/directive/ngCsp.js',
    'src/ul/directive/ngEventDirs.js',
    'src/ul/directive/ngIf.js',
    'src/ul/directive/ngInclude.js',
    'src/ul/directive/ngInit.js',
    'src/ul/directive/ngList.js',
    'src/ul/directive/ngModel.js',
    'src/ul/directive/ngModelOptions.js',
    'src/ul/directive/ngNonBindable.js',
    'src/ul/directive/ngOptions.js',
    'src/ul/directive/ngPluralize.js',
    'src/ul/directive/ngRef.js',
    'src/ul/directive/ngRepeat.js',
    'src/ul/directive/ngShowHide.js',
    'src/ul/directive/ngStyle.js',
    'src/ul/directive/ngSwitch.js',
    'src/ul/directive/ngTransclude.js',
    'src/ul/directive/script.js',
    'src/ul/directive/select.js',
    'src/ul/directive/validators.js',
    'src/ultimate.bind.js',
    'src/publishExternalApis.js',
    'src/ulLocale/ultimate-locale_en-us.js'
  ],

  'ultimateLoader': [
    'src/stringify.js',
    'src/minErr.js',
    'src/loader.js'
  ],

  'angularModules': {
    'ngAnimate': [
      'src/ulAnimate/shared.js',
      'src/ulAnimate/rafScheduler.js',
      'src/ulAnimate/animateChildrenDirective.js',
      'src/ulAnimate/animateCss.js',
      'src/ulAnimate/animateCssDriver.js',
      'src/ulAnimate/animateJs.js',
      'src/ulAnimate/animateJsDriver.js',
      'src/ulAnimate/animateQueue.js',
      'src/ulAnimate/animateCache.js',
      'src/ulAnimate/animation.js',
      'src/ulAnimate/ngAnimateSwap.js',
      'src/ulAnimate/module.js'
    ],
    'ngCookies': [
      'src/ulCookies/cookies.js',
      'src/ulCookies/cookieWriter.js'
    ],
    'ngMessageFormat': [
      'src/ulMessageFormat/messageFormatCommon.js',
      'src/ulMessageFormat/messageFormatSelector.js',
      'src/ulMessageFormat/messageFormatInterpolationParts.js',
      'src/ulMessageFormat/messageFormatParser.js',
      'src/ulMessageFormat/messageFormatService.js'
    ],
    'ngMessages': [
      'src/ulMessages/messages.js'
    ],
    'ngParseExt': [
      'src/ulParseExt/ucd.js',
      'src/ulParseExt/module.js'
    ],
    'ngResource': [
      'src/ulResource/resource.js'
    ],
    'ngRoute': [
      'src/shallowCopy.js',
      'src/routeToRegExp.js',
      'src/ulRoute/route.js',
      'src/ulRoute/routeParams.js',
      'src/ulRoute/directive/ngView.js'
    ],
    'ngSanitize': [
      'src/ulSanitize/sanitize.js',
      'src/ulSanitize/filter/linky.js'
    ],
    'ngMock': [
      'src/routeToRegExp.js',
      'src/ulMock/angular-mocks.js',
      'src/ulMock/browserTrigger.js'
    ],
    'ngTouch': [
      'src/ulTouch/touch.js',
      'src/ulTouch/swipe.js',
      'src/ulTouch/directive/ngSwipe.js'
    ],
    'ngAria': [
      'src/ulAria/aria.js'
    ]
  }
};

ultimateFiles['angularSrcModuleNgAnimate'] = ultimateFiles['angularModules']['ngAnimate'];
ultimateFiles['angularSrcModuleNgAria'] = ultimateFiles['angularModules']['ngAria'];
ultimateFiles['angularSrcModuleNgCookies'] = ultimateFiles['angularModules']['ngCookies'];
ultimateFiles['angularSrcModuleNgMessageFormat'] = ultimateFiles['angularModules']['ngMessageFormat'];
ultimateFiles['angularSrcModuleNgMessages'] = ultimateFiles['angularModules']['ngMessages'];
ultimateFiles['angularSrcModuleNgResource'] = ultimateFiles['angularModules']['ngResource'];
ultimateFiles['angularSrcModuleNgRoute'] = ultimateFiles['angularModules']['ngRoute'];
ultimateFiles['angularSrcModuleNgSanitize'] = ultimateFiles['angularModules']['ngSanitize'];
ultimateFiles['angularSrcModuleNgTouch'] = ultimateFiles['angularModules']['ngTouch'];

ultimateFiles['angularSrcModules'] = [].concat(
  ultimateFiles['angularModules']['ngAnimate'],
  ultimateFiles['angularModules']['ngMessageFormat'],
  ultimateFiles['angularModules']['ngMessages'],
  ultimateFiles['angularModules']['ngCookies'],
  ultimateFiles['angularModules']['ngResource'],
  ultimateFiles['angularModules']['ngRoute'],
  ultimateFiles['angularModules']['ngSanitize'],
  ultimateFiles['angularModules']['ngMock'],
  ultimateFiles['angularModules']['ngTouch'],
  ultimateFiles['angularModules']['ngAria']
);

if (exports) {
  exports.files = ultimateFiles;
  exports.mergeFilesFor = function() {
    var files = [];

    Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
      ultimateFiles[filegroup].forEach(function(file) {
        // replace @ref
        var match = file.match(/^@(.*)/);
        if (match) {
          files = files.concat(ultimateFiles[match[1]]);
        } else {
          files.push(file);
        }
      });
    });

    return files;
  };
}
