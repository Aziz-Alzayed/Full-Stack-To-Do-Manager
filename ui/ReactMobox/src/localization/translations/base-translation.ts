interface BaseTranslationInterface {
  homePage: string;
  userManagement: string;
  tasks: string;
  password: string;
  submit: string;
  email: string;
  passwordInputMessage: string;
  passwordWarningMessage: string;
  passwordAtLeastOneDigit: string;
  passwordAtLeastOneLowCase: string;
  passwordAtLeastOneUpperCase: string;
  passwordAtLeastOneNonAlphNum: string;
  submittingForgotPassword: string;
  failedSubmitForgotPassword: string;
  emailInputMessage: string;
  checkYourEmail: string;
  forgotPassword: string;
}

export abstract class BaseTranslation implements BaseTranslationInterface {
  abstract homePage: string;
  abstract userManagement: string;
  abstract tasks: string;
  abstract password: string;
  abstract submit: string;
  abstract email: string;
  abstract passwordInputMessage: string;
  abstract passwordWarningMessage: string;
  abstract passwordAtLeastOneDigit: string;
  abstract passwordAtLeastOneLowCase: string;
  abstract passwordAtLeastOneUpperCase: string;
  abstract passwordAtLeastOneNonAlphNum: string;
  abstract submittingForgotPassword: string;
  abstract failedSubmitForgotPassword: string;
  abstract emailInputMessage: string;
  abstract checkYourEmail:string;
  abstract forgotPassword: string;
}

export const TranslationKeys: BaseTranslationInterface = {
  homePage: "homePage",
  userManagement: "userManagement",
  tasks: "tasks",
  password: "password",
  submit: "submit",
  email: "email",
  passwordInputMessage: "passwordInputMessage",
  passwordWarningMessage: "passwordWarningMessage",
  passwordAtLeastOneDigit: "passwordAtLeastOneDigit",
  passwordAtLeastOneLowCase: "passwordAtLeastOneLowCase",
  passwordAtLeastOneUpperCase: "passwordAtLeastOneUpperCase",
  passwordAtLeastOneNonAlphNum: "passwordAtLeastOneNonAlphNum",
  submittingForgotPassword: "submittingForgotPassword",
  failedSubmitForgotPassword: "failedSubmitForgotPassword",
  emailInputMessage: "emailInputMessage",
  checkYourEmail: "checkYourEmail",
  forgotPassword: "forgotPassword"
};
