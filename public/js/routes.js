var app = angular.module("app")
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
            url: "/index",
            templateUrl: "/views/index.html"
        });
});