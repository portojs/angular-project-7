'use strict';

angular.module('swordsApp')
  .directive('weaponList', ['WeaponsService', function(WeaponsService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/weapon-list.html',
      scope: {
        search: '=',
        currentType: '='
      },
      link: function(scope, element, attrs) {
        scope.weapons = WeaponsService.query();
      }
    };
  }]);