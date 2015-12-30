/**
 * Created by Peter on 28.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('CabinetIndexCtrl', [ '$scope', 'UserService', 'GravatarProvider', function($scope, UserService, GravatarProvider) {
    $scope.user = UserService.getUser();
    $scope.gravatarUrl = function(email) {
      return GravatarProvider(email);
    };
    $scope.deleteUser = function() {
      $scope.user = {};
    };
  }]);