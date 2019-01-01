using AutoMapper;

namespace DemoMvc
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DemoApiSdk.Customer, Models.Customer>().ReverseMap();
        }
    }
}