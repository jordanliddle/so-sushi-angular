'use strict';

/**
 * @ngdoc function
 * @name spiritshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spiritshopApp
 */
angular.module('spiritshopApp')
  .constant('dataUrl', 'http://localhost:5500/products')
  .controller('MainCtrl', function ($scope, $http, dataUrl) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = {};

    $http.get(dataUrl)
      .success(function (data) {
        $scope.data.products = data;
      })
      .error(function (error) {
        $scope.data.error = error;
      });
  });
