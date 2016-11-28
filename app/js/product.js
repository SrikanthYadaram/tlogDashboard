/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('productCtrl', ['$scope', '$filter','$http','$routeParams', function (scope, filter, http, $routeParams) {
    scope.deptName = $routeParams.deptName;
    scope.deptId = $routeParams.deptId;
    scope.products={};
    scope.productAutomation={};
    scope.roadMapQuarters = ["Q1","Q2","Q3","Q4"];
    scope.roadMapStyle = [{
        "services" : "3",
        "width":"25",
        "color":"progress-bar progress-bar-purple progress-bar-striped",
        },
        {
            "services" : "4",
            "width":"50",
            "color":"progress-bar progress-bar-orange progress-bar-striped",
        },
        {
            "services" : "2",
            "width":"75",
            "color":"progress-bar progress-bar-blue progress-bar-striped",
        },
        {
            "services" : "4",
            "width":"100",
            "color":"progress-bar progress-bar-indianred progress-bar-striped",
        }];

    http.get('http://localhost:8080//products/deptId/'+ scope.deptId).then(function (response) {
        scope.productCollection = response.data;
        for(var i=0; i<scope.productCollection.length; i++) {
            getProdectDetails(scope.productCollection[i].pId);

        }
    }, function (response) {
        console.log("failed to load departments" + response.status);
    });

    scope.setRoadMapWidth = function getRoadMapWidth(size) {
        return {width: size+ "%"};
    };

            function getProdectDetails(pId) {
                http.get('http://localhost:8080//service/pId/' + pId).then(function (response) {
                    var productDetails = {};
                    productDetails.productAutomationCount = 0;
                    productDetails.productExpectedAutomationCount = 0;
                    productDetails.serviceDetails = response.data;
                    for (var j = 0; j < response.data.length; j++) {
                        productDetails.productAutomationCount = productDetails.productAutomationCount + response.data[j].automatedTestCases;
                        productDetails.productExpectedAutomationCount = productDetails.productExpectedAutomationCount + response.data[j].expectedToAutomate;
                    }
                    scope.products[pId] = productDetails;
                    scope.productAutomation[pId] = Math.round(scope.products[pId].productAutomationCount * 100 / scope.products[pId].productExpectedAutomationCount);
                    scope.toggleDetail = function($index) {
                        scope.activePosition = scope.activePosition == $index ? -1 : $index;
                    }

                }, function (response) {
                    console.log("failed to load services" + response.status);
                });
            }

    }]);


/*wmApp.controller("AppCtrl", function($scope) {
    $scope.items = [1,2,3,4,5,6,7];
    $scope.toggleDetail = function($index) {
        //$scope.isVisible = $scope.isVisible == 0 ? true : false;
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };
});*/

