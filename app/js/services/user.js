/**
 * Created by Peter on 28.12.2015.
 */
'use strict';

angular.module('swordsApp')
  .service('UserService', function() {
    var currentUser;
    return {
      newUser: function(user) {
        currentUser = user;
      },
      getUser: function() {
        return currentUser;
      }
    };
  });