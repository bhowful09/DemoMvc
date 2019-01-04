angular.module('CustomersApp', ['customerService'])
    .controller('CustomersCtrl', function ($scope, $http, CustomerService) {
        $scope.title = "loading customers...";
        $scope.working = false;
        
        $scope.getAllCustomers = function () {
            $scope.working = true;
            $scope.title = "loading customer...";

            //$http.get("http://lazerpanther-001-site1.atempurl.com/api/customers").then(function (response) {
            //    $scope.title = "Customer";
            //    $scope.working = true;
            //    $scope.customers = response.data;
            //    $scope.deleteme = CustomerService.addNums(response.data[0].firstName);
            //}, function (error) {
            //    $scope.title = "Oops... something went wrong";
            //    $scope.working = false;
            //});
            CustomerService.getAllCustomers(function (response) {
                $scope.customers = response.data;
            });
        };
    });