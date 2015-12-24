/**
 * Created by Peter on 24.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CatalogueIndexCtrl', ['$scope', 'WeaponsService', 'WeaponTypesService', function($scope, WeaponsService, WeaponTypesService) {
    $scope.weapons = WeaponsService.query();
    $scope.weaponTypes = WeaponTypesService.query();
    $scope.currentType = "";
    $scope.selectType = function(type) {
      if ($scope.currentType === type) {
        $scope.currentType = "";
      } else {
        $scope.currentType = type;
      }
    };
  }]);