var RouteApp = angular.module("testApp", ["ngRoute", 'customerService']);

RouteApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/List", {
        templateUrl: "/CustomersAngular/List"
    });
    $routeProvider.when("/Individual", {
        templateUrl: "/CustomersAngular/Individual"
    });
    $routeProvider.when("/Third/:input", {
        templateUrl: function (params) { return "/CustomersAngular/Individual?input=" + params.input }
    });
    $routeProvider.otherwise({ redirectTo: "/First" });
}
);

RouteApp.controller('CustomersCtrl', function ($scope, $http, CustomerService) {
    $scope.title = "loading customers...";
    $scope.working = false;

    $scope.getAllCustomers = function () {
        $scope.working = true;
        $scope.title = "loading customer...";

        CustomerService.getAllCustomers(function (response) {
            $scope.customers = response.data;
        });
    };

    $scope.getOneCustomer = function (id) {
        $scope.working = true;
        $scope.title = "loading customer...";

        CustomerService.getCustomer(id, function (response) {
            $scope.customer = response.data;
        });
    };
});