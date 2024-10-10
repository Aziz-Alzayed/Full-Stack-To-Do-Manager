using FluentValidation;
using FSTD.Application.Validations.Extentions;

namespace FSTD.Application.DTOs.Accounts.Auths
{
    public class ResendVerificationEmailDto
    {
        public string UserEmail { get; set; }
        public string VerificationUrl { get; set; }
    }
    public class ResendVerificationEmailDtoValidator : AbstractValidator<ResendVerificationEmailDto>
    {
        public ResendVerificationEmailDtoValidator()
        {
            RuleFor(dto => dto.UserEmail).IsEmail();
            RuleFor(dto => dto.VerificationUrl).IsReturnURL();
        }
    }
}
