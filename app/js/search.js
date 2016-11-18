/**
 * Created by Srikanth on 11/17/2016.
 */

wmApp.controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {product: 'WITS', techStack: 'Java 1.7, JUnit'},
        {product: 'EPAY', techStack: 'Egg Plant'},
        {product: 'Payment', techStack: 'Java, JUnit, Selenium'}
    ];
    scope.products = ['product', 'techStack'];
    scope.selectedProducts = scope.products[0];
}]);