'use strict';

angular.module('swordsApp')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-footer.html'
    };
  });