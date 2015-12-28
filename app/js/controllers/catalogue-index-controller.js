/**
 * Created by Peter on 24.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CatalogueIndexCtrl', ['$scope', '$routeParams', 'WeaponsFactory', function($scope, $routeParams, WeaponsFactory) {
    $scope.currentType = "";
    $scope.weapons = WeaponsFactory.query();
  }]);