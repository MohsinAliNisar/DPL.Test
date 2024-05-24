using AutoMapper;
using Dpl.CartApi.Core.DTOs;
using Dpl.CartApi.Core.Entities;

namespace Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<CartItemDto, CartItem>()
                .ReverseMap();
        }
    }
}