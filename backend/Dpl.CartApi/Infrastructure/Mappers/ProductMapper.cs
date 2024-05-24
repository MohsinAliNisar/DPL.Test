using Dpl.CartApi.Core.DTOs;
using Dpl.CartApi.Core.Entities;

namespace Dpl.CartApi.Infrastructure.Mappers
{
    public static class ProductMapper
    {
        public static ProductDto ToDto(this Product product)
        {
            return new ProductDto
            {
                ProductId = product.ProductId,
                Description = product.Description,
                ImageUrl = product.ImageUrl,
                Amount = product.Amount
            };
        }

        public static Product ToEntity(this ProductDto productDto)
        {
            return new Product
            {
                ProductId = productDto.ProductId,
                Description = productDto.Description,
                ImageUrl = productDto.ImageUrl,
                Amount = productDto.Amount
            };
        }
    }
}
