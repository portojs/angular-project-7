'use strict';

angular.module('swordsApp')
  .service('ComparisonService', ['$resource', function($resource) {
    return $resource('json/comparison.json', {}, {});
  }]);