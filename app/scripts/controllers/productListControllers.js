'use strict';

angular.module('spiritshopApp')
  .constant('productListActiveClass', 'active')
  .constant('productListPageCount', 3)
  .controller('productListCtrl', function($scope, $filter, productListActiveClass, productListPageCount, cart) { //declaring a dependency

    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    }

    $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
    }

    $scope.categoryFilterFn = function (product) {
      return selectedCategory == null || product.category == selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
      return selectedCategory == category ? productListActiveClass : '';
    }

    $scope.getPageClass = function (page) {
      return $scope.selectedPage == page ? productListActiveClass : '';
    }
    $scope.addProductToCart = function (product) { 
      cart.addProduct(product.id, product.name, product.price);
    }

  });