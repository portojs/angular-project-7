'use strict';

angular.module('swordsApp')
  .directive('weaponList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/weapon-list.html',
      scope: {
        weapons: '=',
        search: '=',
        currentType: '='
      }
      //controller: function($scope) {
      //  this.currentType = "";
      //  this.selectType = function(type) {
      //    if ($scope.currentType === type) {
      //      $scope.currentType = "";
      //    } else {
      //      $scope.currentType = type;
      //    }
      //  };
      //  this.checkType = function(type) {
      //    console.log('checkType fires');
      //    return $scope.currentType === type;
      //  };
      //}
    };
  });