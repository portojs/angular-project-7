'use strict';

angular.module('swordsApp')
  .directive('weaponList', ['WeaponsService', '$routeParams', function(WeaponsService, $routeParams) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/weapon-list.html',
      scope: {
        search: '=',
        currentType: '='
      },
      link: function(scope, element, attrs) {
        scope.weapons = WeaponsService.query();
        scope.weapon = WeaponsService.get({weaponId: $routeParams.weaponId}, function(weapon) {
          scope.name = weapon.name;
        });
      }
    };
  }]);