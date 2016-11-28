var wmApp = angular.module('myApp', ["ngRoute", 'smart-table', "chart.js","angularUtils.directives.dirPagination"]);


wmApp.config(function($routeProvider) {
    $routeProvider
        .when("/product/:deptName/:deptId", {templateUrl : "./partials/products.html", controller : 'productCtrl'})
        .when("/dept/:deptName/:productName/:producId", {templateUrl : "./partials/services.html", controller : 'serviceCtrl'})
        .when("/error",  {templateUrl : "./partials/404_page.html", controller : 'Controller404'});

});






