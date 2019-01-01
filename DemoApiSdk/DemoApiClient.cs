using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Text;

namespace DemoApiSdk
{
    public class DemoApiClient
    {
        private readonly RestClient _restClient = new RestClient();

        public DemoApiClient(string baseUrl)
        {
            _restClient = new RestClient(baseUrl);
        }

        public List<Customer> GetAllCustomers()
        {
            var request = new RestRequest("api/customers", Method.GET);
            return _restClient.Execute<List<Customer>>(request).Data;
        }

        public Customer GetCustomer(int id)
        {
            var request = new RestRequest($"api/customers/{id}", Method.GET);
            return _restClient.Execute<Customer>(request).Data;
        }

        public Customer UpdateCustomer(Customer customer)
        {
            var request = new RestRequest($"api/customers/{customer.Id}", Method.POST);
            request.AddJsonBody(JsonConvert.SerializeObject(customer));
            var response = _restClient.Execute<Customer>(request).Data;
            return response;
        }
    }
}