/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('productCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.productCollection={};
    scope.Math= window.Math;
    scope.currentPage = 1;
    scope.pageSize = 10;
    scope.labels = ["Pass", "Fail"];
    scope.colours = ["#2ECF6E", "#F65050"];
    scope.data = [11,15];
    scope.legend = {
        cutoutPercentage: 60,
        elements:{
            arc:{
                borderWidth: 0.3,
                borderColor:['rgba(253,253,50, 1)','rgba(253,253,50, 1)'],
                hoverBorderWidth: 1,
                hoverBorderColor:['rgba(241, 248, 15, 1)','rgba(241, 248, 15, 1)']
            }
        }
    }

    http.get('http://localhost:8080//products').then(function (response) {
        scope.productCollection = response.data;

          //  scope.data = [scope.productCollection[i].totalTestCases - scope.productCollection[i].failedTc, scope.productCollection[i].failedTc];

            scope.toggleDetail = function ($index, pid) {
                for (var i = 0; i < scope.productCollection.length; i++) {
                    if (pid == scope.productCollection[i].productId) {
                        var totalTc = scope.productCollection[i].totalTestCases;
                        var failTc = scope.productCollection[i].failedTc;
                        scope.data = [totalTc - failTc, failTc];
                    }
                }
                scope.activePosition = scope.activePosition == $index ? -1 : $index;


        }
    }, function (response) {
        console.log("failed to load departments" + response.status);
    });

    scope.setRoadMapWidth = function getRoadMapWidth(size) {
        return {width: size+ "%"};
    };

}]);


