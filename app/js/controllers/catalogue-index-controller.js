/**
 * Created by Peter on 24.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CatalogueIndexCtrl', ['$scope', '$routeParams', 'WeaponsService', function($scope, $routeParams, WeaponsService) {
    $scope.currentType = "";
    $scope.weapon = WeaponsService.get({weaponId: $routeParams.weaponId}, function(weapon) {
      $scope.name = weapon.name;
    });
  }]);