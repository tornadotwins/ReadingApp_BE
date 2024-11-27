import {
  AppTextType,
  LanguageType,
  UserType,
  AppTextPageStatusType
} from "@/pages/types";

type TermType = {
  variable: string;
  defaultTerm: string;
  currentTerm: string;
}

type PageTermsPropsType = {
  pageName: string;
  languageCode: string;
  languageLabel: string;
  currentLanguage: string;
  currentUser: UserType;
  languages: LanguageType[];
  pageId: string;
  terms: AppTextType[];
  disable?: boolean;
  isComplete?: {
    en: boolean,
    ar: boolean,
    [key: string]: boolean,
  };
  isPublish?: {
    en: boolean,
    ar: boolean,
    [key: string]: boolean,
  };
  
  onChangeInput: (id: string, changedVal: string) => void;
  onChangeAppTextPageStatus: (status: AppTextPageStatusType) => void;
};

export type {
  TermType,
  PageTermsPropsType,
}