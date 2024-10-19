import { BaseTranslation } from "./base-translation";

export class EnglishTranslation extends BaseTranslation {
  homePage = "Home Page";
  userManagement = "User Management";
  tasks = "Tasks";
  password = "Password";
  submit= "Submit";
  email="Email"
  addTask = "Add Task";
  passwordInputMessage = "Please input your password!";
  passwordWarningMessage = "Password must length be at least";
  passwordAtLeastOneDigit = "Password must contain at least one digit!";
  passwordAtLeastOneLowCase =
    "Password must contain at least one lowercase letter!";
  passwordAtLeastOneUpperCase =
    "Password must contain at least one uppercase letter!";
  passwordAtLeastOneNonAlphNum =
    "Password must contain at least one non-alphanumeric character!";
  submittingForgotPassword = "Submitting forgot password request for";
  failedSubmitForgotPassword ="Failed to submit forgot password request";
  emailInputMessage= "Please input your email";
  checkYourEmail= "Check your email";
  forgotPassword= "Forgot password";
}
