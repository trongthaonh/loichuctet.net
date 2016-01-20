'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, FacebookProvider) {
  'ngInject';

  FacebookProvider.init('1252568694759524');

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    title: 'Home',
    views : {
      "header" : {
        templateUrl : "_header.html",
        controller: 'HeaderController as header'
      },
      "sidebar" : {
        templateUrl : "_sidebar.html",
        controller: 'SidebarController as sidebar'
      },
      "main" : {
        templateUrl : "_main.html",
        controller: 'MainController as main'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;