'use strict';

angular.module('swordsApp')
  .service('WeaponsService', ['$resource', function($resource) {
    return $resource('json/weapons.json', {}, {});
  }]);