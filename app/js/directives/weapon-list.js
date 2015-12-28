'use strict';

angular.module('swordsApp')
  .directive('weaponList', ['WeaponsFactory', '$routeParams', function(WeaponsFactory, $routeParams) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/weapon-list.html',
      scope: {
        search: '=',
        currentType: '=',
        weapons: '='
      },
      link: function(scope, element, attrs) {
        //scope.weapons = WeaponsFactory.query();
        //scope.weapon = WeaponsFactory.get({weaponId: $routeParams.weaponId}, function(weapon) {
        //  scope.name = weapon.name;
        //});
      }
    };
  }]);