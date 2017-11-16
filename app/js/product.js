/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('productCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.productCollection={};
    scope.currentPage = 1;
    scope.pageSize = 10;
    scope.labels = ["Pass", "Fail"];
    scope.colours = ["#2ECF6E", "#F65050"];
    scope.data = [11,15];

    http.get('http://localhost:8080//products').then(function (response) {
        scope.productCollection = response.data;
        scope.toggleDetail = function($index) {
            scope.activePosition = scope.activePosition == $index ? -1 : $index;
        }
    }, function (response) {
        console.log("failed to load departments" + response.status);
    });

    scope.setRoadMapWidth = function getRoadMapWidth(size) {
        return {width: size+ "%"};
    };

}]);


