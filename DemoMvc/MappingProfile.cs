using AutoMapper;

namespace DemoMvc
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DemoApiSdk.Customer, Models.Customer>().ReverseMap();
            CreateMap<DemoApiSdk.CustomerCreate, Models.CustomerCreate>().ReverseMap();
        }
    }
}