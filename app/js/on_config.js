'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    title: 'Home',
    views : {
      "header" : {
        templateUrl : "_header.html",
        controller: 'HeaderController'
      },
      "sidebar" : {
        templateUrl : "_sidebar.html",
        controller: 'SidebarController'
      },
      "main" : {
        templateUrl : "_main.html",
        controller: 'MainController'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;