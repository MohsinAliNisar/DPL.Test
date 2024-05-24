using Dpl.CartApi.Core.Entities;

namespace Dpl.CartApi.Core.Interfaces
{
    public interface IUserRepository
    {
        User Authenticate(string username, string password);
    }
}
