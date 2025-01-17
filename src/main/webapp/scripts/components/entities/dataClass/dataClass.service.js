'use strict';

angular.module('analyserApp')
    .factory('DataClass', function ($resource, DateUtils) {
        return $resource('api/dataClasss/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
