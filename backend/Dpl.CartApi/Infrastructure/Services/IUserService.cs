using Dpl.CartApi.Core.Entities;

namespace Dpl.CartApi.Infrastructure.Services
{
    public interface IUserService
    {
        User ValidateUser(string username, string password);
        string GenerateToken(User user);
    }
}
