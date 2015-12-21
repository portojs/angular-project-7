'use strict';

angular.module('swordsApp')
  .directive('sortCategories', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sort-categories.html'
    };
  });