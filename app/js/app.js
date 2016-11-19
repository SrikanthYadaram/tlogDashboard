var wmApp = angular.module('myApp', ["ngRoute", 'smart-table']);


wmApp.config(function($routeProvider) {
    $routeProvider
        .when("/posProducts", {templateUrl : "./partials/posProducts.html", controller : 'productCtrl'})
        .when("/services/:productName", {templateUrl : "./partials/services.html", controller : 'serviceCtrl'})
        .when("/error",  {templateUrl : "./partials/404_page.html", controller : 'Controller404'});

});






