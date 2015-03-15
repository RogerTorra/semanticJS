'use strict';

angular.module('App')
    .controller('DocsDetailController', function ($scope, $stateParams, Docs) {
        $scope.docs = {};
        $scope.load = function (id) {
            Docs.get({id: id}, function(result) {
              $scope.docs = result;
            });
        };
        $scope.load($stateParams.id);
    });
