'use strict';

/**
 * @ngdoc overview
 * @name spiritshopApp
 * @description
 * # spiritshopApp
 *
 * Main module of the application.
 */
angular
  .module('spiritshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'customFilters' // This is known as 'declaring a dependency'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
