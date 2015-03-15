'use strict';

angular.module('App')
    .controller('DocsController', function ($scope, Docs) {
        $scope.docss = [];
        $scope.loadAll = function() {
            Docs.query(function(result) {
               $scope.docss = result;
            });
        };
        $scope.loadAll();

        $scope.create = function () {
            Docs.update($scope.docs,
                function () {
                    $scope.loadAll();
                    $('#saveDocsModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            Docs.get({id: id}, function(result) {
                $scope.docs = result;
                $('#saveDocsModal').modal('show');
            });
        };

        $scope.delete = function (id) {
            Docs.get({id: id}, function(result) {
                $scope.docs = result;
                $('#deleteDocsConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Docs.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteDocsConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.clear = function () {
            $scope.docs = {name: null, description: null, date_created: null, type: null, content: null, id: null};
        };
    });
