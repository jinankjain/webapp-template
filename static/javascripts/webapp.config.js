/**
 * Created by shashank on 11/08/15.
 */
(function () {
    'use strict';

    angular
        .module('webapp.config', [])
        .config(config);

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();