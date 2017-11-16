var wmApp = angular.module('myApp', ["ngRoute", 'smart-table', "chart.js","angularUtils.directives.dirPagination"]);


wmApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {templateUrl : "./partials/products.html", controller : 'productCtrl'})

        .when("/error",  {templateUrl : "./partials/404_page.html", controller : 'Controller404'});

});






