'use strict';

angular.module('swordsApp')
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    };
  });