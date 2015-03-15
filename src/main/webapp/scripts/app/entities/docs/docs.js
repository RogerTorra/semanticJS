'use strict';

angular.module('App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('docs', {
                parent: 'entity',
                url: '/docs',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'App.docs.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/docs/docss.html',
                        controller: 'DocsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('docs');
                        return $translate.refresh();
                    }]
                }
            })
            .state('docsDetail', {
                parent: 'entity',
                url: '/docs/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'App.docs.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/docs/docs-detail.html',
                        controller: 'DocsDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('docs');
                        return $translate.refresh();
                    }]
                }
            });
    });
