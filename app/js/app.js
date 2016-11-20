var wmApp = angular.module('myApp', ["ngRoute", 'smart-table', "chart.js", "chartApp"]);


wmApp.config(function($routeProvider) {
    $routeProvider
        .when("/product/:deptName/:deptId", {templateUrl : "./partials/posProducts.html", controller : 'productCtrl'})
        .when("/service/:productName/:producId", {templateUrl : "./partials/services.html", controller : 'serviceCtrl'})
        .when("/error",  {templateUrl : "./partials/404_page.html", controller : 'Controller404'});

});






