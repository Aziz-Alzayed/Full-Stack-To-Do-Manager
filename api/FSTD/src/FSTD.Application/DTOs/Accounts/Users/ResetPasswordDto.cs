using FluentValidation;
using FSTD.Application.Validations.Extentions;

namespace FSTD.Application.DTOs.Accounts.Users
{
    public class ResetPasswordDto
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string NewPassword { get; set; }
    }
    public class ResetPasswordDtoValidator : AbstractValidator<ResetPasswordDto>
    {
        public ResetPasswordDtoValidator()
        {
            RuleFor(dto => dto.Email).IsEmail();
            RuleFor(dto => dto.Token).NotEmpty().WithMessage("Token name is required.");
            RuleFor(dto => dto.NewPassword).IsPassword();
        }
    }
}
