/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('serviceCtrl', ['$scope', '$filter','$routeParams', function (scope, filter, $routeParams) {
    console.log($routeParams.productName);
    scope.productName = $routeParams.productName;

    scope.servicesCollection = [
        {serviceName: 'Promotion mark down', status:true},
        {serviceName: 'Price override', status: true},
        {serviceName: 'XML log', status: false},
        {serviceName: 'MOT log', status: true},
        {serviceName: 'Transaction Movement', status: false},
        {serviceName: 'Brick rates', status: true}
    ];
    scope.products = ['product', 'techStack'];
    scope.selectedProducts = scope.products[0];
}]);

function widgetsController($scope, $route) {
    $scope.$route = $route;
}

