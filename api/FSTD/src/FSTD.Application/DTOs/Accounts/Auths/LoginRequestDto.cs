using FluentValidation;

namespace FSTD.Application.DTOs.Accounts.Auths
{
    public class LoginRequestDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class LoginRequestDtoValidator : AbstractValidator<LoginRequestDto>
    {
        public LoginRequestDtoValidator()
        {
            RuleFor(dto => dto.Email).NotEmpty().WithMessage("Email address is required.")
            .EmailAddress().WithMessage("Invalid email address.");
        }
    }
}
