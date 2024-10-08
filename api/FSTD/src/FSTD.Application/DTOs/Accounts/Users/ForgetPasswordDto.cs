﻿using FluentValidation;
using FSTD.Application.Validations.Extentions;

namespace FSTD.Application.DTOs.Accounts.Users
{
    public class ForgetPasswordDto
    {
        public string Email { get; set; }
        public string ResetUrl { get; set; }
    }
    public class ForgetPasswordDtoValidator : AbstractValidator<ForgetPasswordDto>
    {
        public ForgetPasswordDtoValidator()
        {
            RuleFor(dto => dto.Email).IsEmail();
            RuleFor(dto => dto.ResetUrl).IsReturnURL();
        }
    }
}
