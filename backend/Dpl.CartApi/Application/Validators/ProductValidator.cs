using Dpl.CartApi.Core.Entities;
using FluentValidation;

namespace Dpl.CartApi.Application.Validators
{
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(product => product.Description).NotEmpty().Length(1, 100);
            RuleFor(product => product.ImageUrl).NotEmpty();
            RuleFor(product => product.Amount).GreaterThan(0);
        }
    }
}
