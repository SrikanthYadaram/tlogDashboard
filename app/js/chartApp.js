/**
 * Created by Srikanth on 11/19/2016.
 */
angular.module("chartApp", ["chart.js"]).controller("PieCtrl", function ($scope) {
    $scope.labels = ["PromoMD", "MOTLog", "Transaction Movement"];
    $scope.data = [50, 30, 20];

});
