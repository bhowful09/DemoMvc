angular.module('customerService', [])
    .service('CustomerService', function ($http) {
        this.getAllCustomers = function (callback) {
            try {
                $http.get("http://lazerpanther-001-site1.atempurl.com/api/customers")
                    .then(callback);
            }
            catch (err) {
                console.error(err);
            }
        }

        this.getCustomer = function (id, callback) {
            try {
                $http.get("http://lazerpanther-001-site1.atempurl.com/api/customers/" + id)
                    .then(callback);
            }
            catch (err) {
                console.error(err);
            }
        }
    });