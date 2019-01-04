var RouteApp = angular.module("testApp", ["ngRoute", 'customerService']);

RouteApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/List", {
        templateUrl: "/CustomersAngular/List"
    });
    $routeProvider.when("/Individual", {
        templateUrl: "/CustomersAngular/Individual/"
    });
    $routeProvider.when("/Individual/:input", {
        templateUrl: function (params) { return "/CustomersAngular/Individual?input=" + params.input }
    });
    $routeProvider.otherwise({ redirectTo: "/List" });
}
);

RouteApp.controller('CustomersCtrl', function ($scope, $routeParams, CustomerService) {
    $scope.title = "loading customers...";
    $scope.working = false;

    $scope.getAllCustomers = function () {
        $scope.working = true;
        $scope.title = "loading customer...";

        CustomerService.getAllCustomers(function (response) {
            $scope.customers = response.data;
        });
    };

    $scope.getOneCustomer = function () {
        $scope.working = true;
        $scope.title = "loading customer...";

        CustomerService.getCustomer($routeParams.input, function (response) {
            $scope.customer = response.data;
        });
    };
});