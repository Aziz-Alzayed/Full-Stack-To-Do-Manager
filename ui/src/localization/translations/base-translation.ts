interface BaseTranslationInterface {
    homePage: string;
    userManagement:string;
    tasks:string;
}

export abstract class BaseTranslation implements BaseTranslationInterface {
  abstract homePage: string;
  abstract userManagement:string;
  abstract tasks:string;
}

export const TranslationKeys :BaseTranslationInterface = {
  homePage: 'homePage',
  userManagement: 'userManagement',
  tasks:"tasks"
};