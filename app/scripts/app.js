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
    'customFilters', // This is known as 'declaring a dependency'
    'cart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/productList.html'
      })
      .when('/', {
        templateUrl: 'views/productList.html'
      })
      .otherwise({
        templateUrl: 'views/productList.html'
      });
  });
