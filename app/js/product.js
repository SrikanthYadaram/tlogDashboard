/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('productCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.productsCollection = [
        {productName: 'WITS', techStack: 'Java 1.7, JUnit'},
        {productName: 'EPAY', techStack: 'Egg Plant'},
        {productName: 'Payment', techStack: 'Java, JUnit, Selenium'}
    ];
    scope.products = ['productName', 'techStack'];
    scope.selectedProducts = scope.products[0];
}]);

function widgetsController($scope, $route) {
    $scope.$route = $route;
}

