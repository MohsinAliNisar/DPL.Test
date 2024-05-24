namespace Dpl.CartApi.Core.DTOs
{
    public class CartItemDto
    {
        public int ProductId { get; set; }
        public required string ProductName { get; set; }
        public int Qty { get; set; }
        public decimal Amount { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
