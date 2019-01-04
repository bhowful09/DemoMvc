angular.module('customerService', [])
    .service('CustomerService', function ($http) {
        this.addNums = function (text) {
            return text + "123";
        }

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
                $http.get("http://lazerpanther-001-site1.atempurl.com/api/customers/"+id)
                    .then(callback);
            }
            catch (err) {
                console.error(err);
            }
        }
    });
