using System.ComponentModel.DataAnnotations;

namespace Dpl.CartApi.Core.Entities
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required, StringLength(100)]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public string ImageName { get; set; }

        [Required]
        public string ImageFormat { get; set; }

        [Required]
        public decimal Amount { get; set; }
    }
}
