'use strict';

import angular from 'angular';

// angular modules
import 'angular-ui-router';
import 'angular-resource';
import 'angular-sanitize';
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
import 'angular-color-picker';
import jQuery from 'jquery';
import 'sweetalert';


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
  'ngSanitize',
  'facebook',
  'mp.colorPicker'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));
angular.module('app').constant('_', require('lodash'));
angular.module('app').constant('html2canvas', html2canvas);
angular.module('app').constant('CSPhotoSelector', CSPhotoSelector);
angular.module('app').constant('$', jQuery);

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app'], {
  strictDi: true
});
