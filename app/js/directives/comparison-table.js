'use strict';

angular.module('swordsApp')
  .directive('comparisonTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/comparison-table.html',
      scope: {
        list: '='
      }
    };
  });