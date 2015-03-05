'use strict';

angular.module('semanticjsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
