/**
 * Created by Srikanth on 11/20/2016.
 */

wmApp.controller('deptCtrl', ['$scope', '$http','$location',function (scope, http, $location) {

    scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    http.get('http://localhost:8080/departments').then(function (response) {
        scope.departmentCollection = response.data;
    }, function (response) {
        console.log("failed to load departments" + response.status);
    })


    scope.idSelected = null;
    scope.setSelected = function (idSelected) {
        scope.idSelected = idSelected;
    };

}]);



