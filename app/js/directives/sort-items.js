'use strict';

angular.module('swordsApp')
  .directive('sortItems', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sort-items.html',
      scope: {
        weaponTypes: '='
      },
      require: '^sortCategories',
      link: function(scope, element, attrs, sortCategories) {
        scope.checkType = function(type) {
          return sortCategories.checkType(type);
        };
        scope.selectType = function(type) {
          sortCategories.selectType(type);
        };
      }
    };
  });