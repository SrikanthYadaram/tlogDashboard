var wmApp = angular.module('myApp', ["ngRoute", 'smart-table']);



/*photoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: '/index.html', controller: 'AlbumsController'})
          
});*/

wmApp.config(function($routeProvider) {
    $routeProvider
        .when("posProducts", {templateUrl : ".partials/posProducts.html", controller : filterCtrl})
        .when("error",  {templateUrl : ".partials/404_page.html", controller : Controller404})

});





