'use strict';

angular.module('swordsApp')
  .directive('weaponList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/weapon-list.html'
    };
  });