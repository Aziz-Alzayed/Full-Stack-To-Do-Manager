using FluentValidation.TestHelper;
using FSTD.Application.Validations;

namespace FSTD.Application.Tests.Validations
{
    public class EmailValidatorTests
    {
        private readonly EmailValidator _validator;

        public EmailValidatorTests()
        {
            _validator = new EmailValidator();
        }

        [Fact]
        public void Should_HaveError_When_EmailIsEmpty()
        {
            // Arrange
            var model = string.Empty;

            // Act
            var result = _validator.TestValidate(model);

            // Assert
            result.ShouldHaveValidationErrorFor(email => email)
                .WithErrorMessage("User Email is required.");
        }

        [Fact]
        public void Should_HaveError_When_EmailIsInvalid()
        {
            // Arrange
            var model = "invalid-email";

            // Act
            var result = _validator.TestValidate(model);

            // Assert
            result.ShouldHaveValidationErrorFor(email => email)
                .WithErrorMessage("User Email must be a valid email address.");
        }

        [Fact]
        public void Should_NotHaveError_When_EmailIsValid()
        {
            // Arrange
            var model = "user@example.com";

            // Act
            var result = _validator.TestValidate(model);

            // Assert
            result.ShouldNotHaveValidationErrorFor(email => email);
        }
    }
}
