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
      .when('/complete', {
        templateUrl: 'views/thankYou.html'
      })
      .when('/placeorder', {
        templateUrl: 'views/placeOrder.html'
      })
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html'
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

angular.module('spiritShopAdmin', ['ngRoute'])
      .config(function ($routeProvider) {

        $routeProvider.when('/login', {
          templateUrl: '/views/adminLogin.html'
        });

        $routeProvider.when('/main', {
          templateUrl: '/views/adminMain.html'
        });

        $routeProvider.otherwise( {
          redirectTo: '/login'
        });
      });  
