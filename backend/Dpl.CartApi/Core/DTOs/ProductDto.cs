namespace Dpl.CartApi.Core.DTOs
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        public required string Description { get; set; }
        public required string ImageUrl { get; set; }
        public decimal Amount { get; set; }
    }
}
