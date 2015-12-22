/**
 * Created by Peter on 22.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('MainIndexCtrl', ['$scope', 'ComparisonService', function($scope, ComparisonService) {
    $scope.list = ComparisonService.query();
  }]);