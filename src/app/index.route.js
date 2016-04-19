(function() {
    'use strict';

    angular
        .module('charityfulfillment')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
                // controllerAs: 'main'
            })
            .state('home.login', {
                url: '/login',
                templateUrl: 'app/partials/login/login.html',
                controller: 'LoginController'
                // controllerAs: 'login'
            })
            .state('home.category', {
                url: '/category',
                templateUrl: 'app/partials/category/category.html',
                controller: 'CategoryController'
                // controllerAs: 'cat'
            })
            .state('home.cat_detail', {
                url: '/cat_detail',
                templateUrl: 'app/partials/cat_detail/cat_detail.html',
                controller: 'Cat_detailController'
                // controllerAs: 'catdetail'
            })

        $urlRouterProvider.otherwise('/home/login');
    }

})();
