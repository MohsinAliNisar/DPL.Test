using Dpl.CartApi.Core.DTOs;
using Dpl.CartApi.Core.Entities;
using Dpl.CartApi.Infrastructure.Services;
using System.Collections.Concurrent;

namespace Dpl.CartApi.Application.Services
{
    public class ProductService : IProductService
    {
        private static readonly List<Product> Products = new()
        {
            new Product { ProductId = 1, Description = "Mango", ImageUrl = "mango.jpg", ImageName = "mango", ImageFormat = "jpg", Amount = 500 },
            new Product { ProductId = 2, Description = "Apple", ImageUrl = "apple.jpg", ImageName = "apple", ImageFormat = "jpg", Amount = 300 }
        };

        // In-memory storage for user carts
        private static readonly ConcurrentDictionary<string, List<CartItemDto>> UserCarts = new();

        public IEnumerable<ProductDto> GetProducts()
        {
            return Products.Select(p => new ProductDto
            {
                ProductId = p.ProductId,
                Description = p.Description,
                ImageUrl = p.ImageUrl,
                Amount = p.Amount
            });
        }

        public ProductDto GetProductById(int id)
        {
            var product = Products.FirstOrDefault(p => p.ProductId == id);
            if (product == null) return null;

            return new ProductDto
            {
                ProductId = product.ProductId,
                Description = product.Description,
                ImageUrl = product.ImageUrl,
                Amount = product.Amount
            };
        }

        public void AddToCart(string userName, CartItemDto cartItem)
        {
            if (!UserCarts.ContainsKey(userName))
            {
                UserCarts[userName] = new List<CartItemDto>();
            }

            var userCart = UserCarts[userName];
            var existingItem = userCart.FirstOrDefault(c => c.ProductId == cartItem.ProductId);
            if (existingItem != null)
            {
                existingItem.Qty += cartItem.Qty;
            }
            else
            {
                userCart.Add(cartItem);
            }
        }

        public List<CartItemDto> GetCart(string userName)
        {
            UserCarts.TryGetValue(userName, out var cart);
            return cart ?? new List<CartItemDto>();
        }
    }
}
