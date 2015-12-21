'use strict';

angular.module('swordsApp')
  .provider('GravatarProvider', function() {
    var avatarSize = 80;
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size:=" + avatarSize.toString();
      };
    };
  });