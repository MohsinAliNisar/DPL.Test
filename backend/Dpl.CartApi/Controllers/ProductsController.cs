using Dpl.CartApi.Core.DTOs;
using Dpl.CartApi.Core.Interfaces;
using Dpl.CartApi.Infrastructure.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Dpl.CartApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ICartService _cartService;
        private readonly IMemoryCache _cache;

        public ProductsController(IProductService productService, ICartService cartService, IMemoryCache cache)
        {
            _productService = productService;
            _cartService = cartService;
            _cache = cache;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _cache.GetOrCreate("products", entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5);
                return _productService.GetProducts();
            });

            return Ok(products);
        }

        [HttpPost("cart")]
        public IActionResult AddToCart([FromBody] CartItemDto cartItem)
        {
            _cartService.AddToCart(cartItem);
            return Ok();
        }

        [HttpGet("cart")]
        public IActionResult GetCartItems()
        {
            var cartItems = _cartService.GetCartItems();
            return Ok(cartItems);
        }
    }
}
