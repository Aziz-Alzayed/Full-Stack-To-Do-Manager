using FluentValidation;
using FSTD.Application.Validations.Extentions;

namespace FSTD.Application.DTOs.Accounts.Users
{
    public class UpdateUserEmailDto
    {
        public string NewEmail { get; set; }
        public string VerificationUrl { get; set; }
    }
    public class UpdateUserEmailDtoValidator : AbstractValidator<UpdateUserEmailDto>
    {
        public UpdateUserEmailDtoValidator()
        {
            RuleFor(dto => dto.NewEmail).IsEmail();

            RuleFor(dto => dto.VerificationUrl).IsReturnURL();
        }
    }
}
