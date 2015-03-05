'use strict';

angular.module('semanticjsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


