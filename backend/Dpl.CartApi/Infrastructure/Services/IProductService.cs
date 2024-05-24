using Dpl.CartApi.Core.DTOs;

namespace Dpl.CartApi.Infrastructure.Services
{
    public interface IProductService
    {
        IEnumerable<ProductDto> GetProducts();
        ProductDto GetProductById(int id);
        void AddToCart(string userName, CartItemDto cartItem);
        List<CartItemDto> GetCart(string userName); // Optional method to get the cart

    }
}
