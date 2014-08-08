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
  .constant('orderUrl', 'http://localhost:5500/orders')
  .controller('MainCtrl', function ($scope, $http, $location, dataUrl, orderUrl, cart) {
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

    $scope.sendOrder = function (shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = cart.getProducts();
      $http.post(orderUrl, order)
        .success(function (data) {
          $scope.data.orderId = data.id;
          cart.getProducts().length = 0;
        })
        .error(function (error) {
          $scope.data.orderError = error;
        }).finally(function () {
          $location.path('/complete')
        });
      }
  });
