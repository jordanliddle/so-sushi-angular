'use strict';

/**
 * @ngdoc function
 * @name spiritshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spiritshopApp
 */
angular.module('spiritshopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = {
      products: [
      { name: 'Product 1', description: 'A product', category: 'Category 1', price: 100 },
      { name: 'Product 2', description: 'A product', category: 'Category 2', price: 100 },
      { name: 'Product 3', description: 'A product', category: 'Category 4', price: 100 },
      { name: 'Product 4', description: 'A product', category: 'Category 3', price: 100 }]
    };
  });
