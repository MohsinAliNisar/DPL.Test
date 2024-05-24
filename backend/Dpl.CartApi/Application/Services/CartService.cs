using AutoMapper;
using Dpl.CartApi.Core.DTOs;
using Dpl.CartApi.Core.Entities;
using Dpl.CartApi.Core.Interfaces;

namespace Dpl.CartApi.Application.Services
{
    public class CartService : ICartService
    {
        private readonly List<CartItem> _cartItems = new List<CartItem>();
        private readonly IMapper _mapper;

        public CartService(IMapper mapper)
        {
            _mapper = mapper;
        }

        public void AddToCart(CartItemDto cartItemDto)
        {
            // Convert DTO to entity
            var cartItem = _mapper.Map<CartItem>(cartItemDto);

            // Check if the item already exists in the cart
            var existingItem = _cartItems.FirstOrDefault(item => item.ProductId == cartItem.ProductId);

            if (existingItem != null)
            {
                // Update the quantity and total amount if it exists
                existingItem.Qty += cartItem.Qty;
                existingItem.TotalAmount = existingItem.Qty * existingItem.Amount;
            }
            else
            {
                // Set total amount for new item
                cartItem.TotalAmount = cartItem.Amount * cartItem.Qty;
                _cartItems.Add(cartItem);
            }
        }

        public IEnumerable<CartItemDto> GetCartItems()
        {
            // Convert entities to DTOs
            return _mapper.Map<IEnumerable<CartItemDto>>(_cartItems);
        }
    }
}
