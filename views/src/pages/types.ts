type RoleType = {
  language: string;
  role: string;
};

type UserType = {
  _id: string;
  username: string;
  password: string;
  roles: RoleType[];
  isAdmin: boolean;
  lastLoggedInAt: number;
};

type LanguageType = {
  value: string;
  label: string;
};

type AppTextType = {
  _id: string;
  variable: string;
  page: string;
  text: {
    en: string;
    ar: string;
    [key: string]: string;
  }
};

type AppTextPageType = {
  pageId: string;
  pageNumber: number;
  pageTitle: string;
  isCompleted: {
    en: string;
    ar: string;
    [key: string]: string;
  },
  isPublished: {
    en: string;
    ar: string;
    [key: string]: string;
  },
  texts: AppTextType[];
}

export type {
  RoleType,
  UserType,
  LanguageType,
  AppTextType,
  AppTextPageType,
};