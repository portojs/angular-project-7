'use strict';

angular.module('swordsApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'templates/pages/main/index.html',
        controller: 'MainIndexCtrl'
      })
      .when('/catalogue', {
        templateUrl: 'templates/pages/catalogue/index.html',
        controller: 'CatalogueIndexCtrl'
      })
      .when('/catalogue/:weaponId', {
        templateUrl: 'templates/pages/catalogue/weapon-detail.html',
        controller: 'CatalogueDetailController'
      })
      .when('/sign_up', {
        templateUrl: 'templates/pages/sign_up/index.html',
        controller: 'SignupIndexCtrl'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/contact/index.html'
      })
      .when('/private_cabinet', {
        templateUrl: 'templates/pages/private_cabinet/index.html',
        controller: 'CabinetIndexCtrl'
      })
      .when('/', {
        templateUrl: 'templates/pages/main/index.html',
        controller: 'MainIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);