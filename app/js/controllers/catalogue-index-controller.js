/**
 * Created by Peter on 24.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CatalogueIndexCtrl', ['$scope', 'WeaponsService', function($scope, WeaponsService) {
    $scope.weapons = WeaponsService.query();
    $scope.currentType = "";
    $scope.selectType = function(type) {
      if ($scope.currentType === type) {
        $scope.currentType = "";
      } else {
        $scope.currentType = type;
      }
    };
  }]);