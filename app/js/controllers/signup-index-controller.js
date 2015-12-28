/**
 * Created by Peter on 28.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .controller('SignupIndexCtrl', ['$scope', 'UserService', function($scope, UserService) {
    $scope.form = {};
    $scope.buttonText = "Form not yet completed";
    $scope.submitForm = function() {
      UserService.newUser($scope.form);
      $scope.form = {};
    };
    $scope.checkForm = function() {
      if ($scope.signUpForm.$valid) {
        $scope.buttonText = "Submit";
      } else {
        $scope.buttonText = "Form not yet completed";
      }
    }
  }]);