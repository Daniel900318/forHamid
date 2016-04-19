(function() {
    'use strict';

    angular
        .module('charityfulfillment')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $state) {
        var vm = this;
        $state.go('home.login')

        
    }
})();
