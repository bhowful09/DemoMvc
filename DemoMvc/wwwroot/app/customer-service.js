angular.module('customerService', [])
    .service('CustomerService', function () {
        this.addNums = function (text) {
            return text + "123";
        }

        this.getAllCustomers = function () {
            return '1';
        }
});