using Dpl.CartApi.Core.Entities;

namespace Dpl.CartApi.Core.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProduct();
        Product GetProductById(int id);
        void AddProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(int id);
    }
}
