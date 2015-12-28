/**
 * Created by Peter on 28.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CatalogueDetailController', ['$scope', '$routeParams', 'WeaponsFactory', function($scope, $routeParams, WeaponsFactory) {
    $scope.weapon = WeaponsFactory.get({weaponId: $routeParams.weaponId}, function(weapon) {
      $scope.name = weapon.name;
    });
  }]);