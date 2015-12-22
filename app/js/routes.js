'use strict';

angular.module('swordsApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'templates/pages/main/index.html'
      })
      .when('/catalogue', {
        templateUrl: 'templates/pages/catalogue/index.html'
      })
      .when('/sign_up', {
        templateUrl: 'templates/pages/sign_up/index.html'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/contact/index.html'
      })
      .when('/private_cabinet', {
        templateUrl: 'templates/pages/private_cabinet/index.html'
      })
      .when('/', {
        templateUrl: 'templates/pages/main/index.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);