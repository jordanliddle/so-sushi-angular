'use strict';

/**
 * @ngdoc function
 * @name spiritshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spiritshopApp
 */
angular.module('spiritshopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
