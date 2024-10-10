using FluentValidation;

namespace FSTD.Application.Validations
{
    public class PhoneNumberValidator : AbstractValidator<string>
    {
        public PhoneNumberValidator()
        {
            RuleFor(phoneNumber => phoneNumber)
                .Cascade(CascadeMode.Stop)
                .NotEmpty().WithMessage("Phone number is required.")
                .Matches(new System.Text.RegularExpressions.Regex(@"^\+[1-9]\d{4,14}$"))
                .WithMessage("Invalid phone number format.");
        }
    }
}
