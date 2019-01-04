angular.module('CustomersApp', ['customerService'])
    .controller('CustomersCtrl', function ($scope, $http, CustomerService) {
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

            CustomerService.getCustomer(1, function (response) {
                $scope.customer = response.data;
            });
        };
    });