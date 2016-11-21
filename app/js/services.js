/**
 * Created by Srikanth on 11/17/2016.
 */


wmApp.controller('serviceCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.productName = $routeParams.productName;
    scope.producId = $routeParams.producId;
    scope.labels = [];
    scope.data = [];
    scope.options = {
        hover: {
            // Overrides the global setting
            mode: 'index'
        }
    };

    http.get('http://localhost:8080/service/pId/'+ scope.producId).then(function (response) {
        scope.serviceCollection = response.data;
        for(i=0;i<scope.serviceCollection.length; i++){
            scope.labels.push(scope.serviceCollection[i].serviceName);
            scope.data.push(scope.serviceCollection[i].automatedTestCases);
        }
        }, function (response) {
        console.log("failed to load product services" + response.status);
    });


}]);



         

