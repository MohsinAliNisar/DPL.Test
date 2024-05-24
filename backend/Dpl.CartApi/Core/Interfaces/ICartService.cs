using Dpl.CartApi.Core.DTOs;

namespace Dpl.CartApi.Core.Interfaces
{
    public interface ICartService
    {
        void AddToCart(CartItemDto cartItem);
        IEnumerable<CartItemDto> GetCartItems();
    }
}
