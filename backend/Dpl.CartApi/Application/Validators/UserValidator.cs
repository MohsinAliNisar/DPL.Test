using Dpl.CartApi.Core.Entities;
using FluentValidation;

namespace Dpl.CartApi.Application.Validators
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(user => user.UserName).NotEmpty();
            RuleFor(user => user.Password).NotEmpty();
            RuleFor(user => user.UserType).NotEmpty().Must(type => type == "Admin" || type == "Guest");
        }
    }
}
