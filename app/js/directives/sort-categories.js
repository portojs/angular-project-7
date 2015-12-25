'use strict';

angular.module('swordsApp')
  .directive('sortCategories', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sort-categories.html',
      scope: {
        currentType: "="
      },
      controller: function($scope) {
        this.selectType = function(type) {
          if ($scope.currentType === type) {
            $scope.currentType = "";
          } else {
            $scope.currentType = type;
          }
        };
        this.checkType = function(type) {
          return $scope.currentType === type;
        };
      }
    };
  });