'use strict';

angular.module('swordsApp')
  .directive('sortItems', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sort-items.html'
    };
  });