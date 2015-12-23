'use strict';

angular.module('swordsApp')
  .directive('mainHeader', ['$location', function($location) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html',
      link: function(scope, element, attrs) {
        scope.checkSelected = function(check) {
          return check === scope.currentlySelected;
        };
        scope.makeSelected = function(select) {
          scope.currentlySelected = select;
        };
        scope.compareSelected = function() {
          if ($location.path() === '/main') {
            return 1;
          } else if ($location.path() === '/catalogue') {
            return 2;
          } else if ($location.path() === '/sign_up') {
            return 3;
          } else if ($location.path() === '/contact') {
            return 4;
          } else if ($location.path() === '/private_cabinet') {
            return 5;
          } else {
            return 1;
          }
        };
        scope.currentlySelected = scope.compareSelected();
        scope.tooltip = 0;
      }
    };
  }]);