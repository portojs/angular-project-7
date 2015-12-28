'use strict';

angular.module('swordsApp')
  .factory('WeaponsFactory', ['$resource', function($resource) {
    return $resource('json/:weaponId.json', {}, {
      query: {method:'GET', params:{weaponId:'weapons'}, isArray:true}
    });
  }]);