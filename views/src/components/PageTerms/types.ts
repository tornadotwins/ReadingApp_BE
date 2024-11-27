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
  defaultLanguage: string;
  currentLanguage: string;
  currentLanguageLabel: string;
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
  
  onChangeDefaultLanguage: (languageCode: string) => void;
  onChangeInput: (id: string, changedVal: string) => void;
  onChangeAppTextPageStatus: (status: AppTextPageStatusType) => void;
  onSave: (id: string) => void;
};

export type {
  TermType,
  PageTermsPropsType,
}