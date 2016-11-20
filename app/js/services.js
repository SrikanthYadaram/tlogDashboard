/**
 * Created by Srikanth on 11/17/2016.
 */


wmApp.controller('serviceCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.productName = $routeParams.productName;
    scope.producId = $routeParams.producId;

    http.get('http://localhost:8080/service/pId/'+ scope.producId).then(function (response) {
        scope.serviceCollection = response.data;
    }, function (response) {
        console.log("failed to load product services" + response.status);
    });
}]);



         

