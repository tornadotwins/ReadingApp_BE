import { LanguageType, UserType } from "@/pages/types";

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
  terms: TermType[];
  disable: boolean;
};

export type {
  TermType,
  PageTermsPropsType,
}