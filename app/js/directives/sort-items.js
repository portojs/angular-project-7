'use strict';

angular.module('swordsApp')
  .directive('sortItems', ['WeaponTypesService', function(WeaponTypesService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sort-items.html',
      require: '^sortCategories',
      link: function(scope, element, attrs, sortCategories) {
        scope.weaponTypes = WeaponTypesService.query();
        scope.checkType = function(type) {
          return sortCategories.checkType(type);
        };
        scope.selectType = function(type) {
          sortCategories.selectType(type);
        };
      }
    };
  }]);