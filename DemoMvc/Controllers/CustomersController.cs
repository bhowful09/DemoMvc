using AutoMapper;
using DemoApiSdk;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DemoMvc.Controllers
{
    public class CustomersController : Controller
    {
        private readonly IMapper _mapper;
        private readonly DemoApiClient _demoApiClient;

        public CustomersController(DemoApiClient demoApiClient, IMapper mapper)
        {
            _demoApiClient = demoApiClient;
            _mapper = mapper;
        }

        public IActionResult ViewList()
        {
            var customers = _demoApiClient.GetAllCustomers();
            var viewCustomers = _mapper.Map<List<Models.Customer>>(customers);
            return View(viewCustomers);
        }

        public IActionResult Edit(int id)
        {
            var customers = _demoApiClient.GetCustomer(id);
            var viewCustomers = _mapper.Map<Models.Customer>(customers);
            return View(viewCustomers);
        }

        [HttpPost]
        public IActionResult Edit(Models.Customer customer)
        {
            var sdkCustomer = _mapper.Map<Customer>(customer);
            return View(_demoApiClient.UpdateCustomer(sdkCustomer));
        }
    }
}