'use strict';

import angular from 'angular';

// angular modules
import 'angular-ui-router';
import 'angular-resource';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';
import 'angular-file-reader';
import 'angular-cropper';
import 'angularjs-facebook';
import html2canvas from 'hn-html2canvas';
import CSPhotoSelector from 'facebook-photo-selector';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'tw.directives.cropper',
  'ngResource',
  'facebook'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));
angular.module('app').constant('_', require('lodash'));
angular.module('app').constant('html2canvas', html2canvas);
angular.module('app').constant('CSPhotoSelector', CSPhotoSelector);

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app'], {
  strictDi: true
});
