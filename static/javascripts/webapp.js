/**
 * Created by shashank on 10/08/15.
 */
(function () {
    'use strict';

    angular
        .module('webapp', [
            'webapp.config',
            'webapp.routes',
            'webapp.authentication',
            'webapp.layout'
        ]);

    angular
        .module('webapp.config', []);

    angular
        .module('webapp.routes', ['ngRoute']);

    angular
        .module('webapp')
        .run(run);

    run.$inject = ['$http'];

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();