using System.ComponentModel.DataAnnotations;

namespace Dpl.CartApi.Core.Entities
{
    public class User
    {
        public required string UserName { get; set; }

        public required string Password { get; set; }

        public required string UserType { get; set; } // Admin, Guest
    }
}
