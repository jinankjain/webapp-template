/**
 * Created by shashank on 11/08/15.
 */
(function () {
    'use strict';

    angular
        .module('webapp.authentication', [
            'webapp.authentication.controllers',
            'webapp.authentication.services'
        ]);

    angular
        .module('webapp.authentication.controllers', []);

    angular
        .module('webapp.authentication.services', ['ngCookies']);
})();