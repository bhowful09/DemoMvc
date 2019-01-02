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

        public IActionResult Index()
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
            return View(_mapper.Map<Models.Customer>(_demoApiClient.UpdateCustomer(sdkCustomer)));
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Details(int id)
        {
            var customer = _demoApiClient.GetCustomer(id);
            return View(_mapper.Map<Models.Customer>(customer));
        }

        [HttpPost]
        public IActionResult Create(Models.CustomerCreate customer)
        {
            var sdkCustomer = _mapper.Map<CustomerCreate>(customer);
            var createdCustomer = _demoApiClient.CreateCustomer(sdkCustomer);
            return RedirectToAction(nameof(Details), new { id = createdCustomer.Id });
        }

        public IActionResult Delete(int id)
        {
            _demoApiClient.DeleteCustomer(id);
            ViewData["Id"] = id;
            return View();
        }
    }
}