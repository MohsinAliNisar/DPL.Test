namespace Dpl.CartApi.Core.Entities
{
    public class CartItem
    {
        public int ProductId { get; set; }
        public Product Item { get; set; }
        public int Qty { get; set; }
        public decimal Amount { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
