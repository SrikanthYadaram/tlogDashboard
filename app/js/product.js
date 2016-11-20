/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('productCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.depttName = $routeParams.deptName;
    scope.deptId = $routeParams.deptId;

    http.get('http://localhost:8080//products/deptId/'+ scope.deptId).then(function (response) {
        scope.productCollection = response.data;
    }, function (response) {
        console.log("failed to load departments" + response.status);
    });
}]);



