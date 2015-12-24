/**
 * Created by Peter on 24.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .service('WeaponTypesService', ['$resource', function($resource) {
    return $resource('json/weapon-types.json', {}, {});
  }]);