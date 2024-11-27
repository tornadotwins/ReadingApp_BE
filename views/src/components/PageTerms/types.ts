import { AppTextType, LanguageType, UserType } from "@/pages/types";

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
  terms: AppTextType[];
  disable?: boolean;
  isComplete?: boolean;
  isPublish?: boolean;

  onChangeStatus: (isCompleted: boolean, isPublished: boolean) => void;
};

export type {
  TermType,
  PageTermsPropsType,
}