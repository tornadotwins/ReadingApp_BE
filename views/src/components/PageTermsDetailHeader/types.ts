import { LanguageType } from "@/pages/types";

type PageTermsDetailHeaderPropsType = {
  language: string;
  languages: LanguageType[];
  currentLanguage: string;
  currentLanguageLabel: string;
  defaultLanguage: string;
  pageId: string;
  disable?: boolean;

  onChangeDefaultLanguage: (languageCode: string) => void;
  onSave: (id: string) => void;
}

export type {
  PageTermsDetailHeaderPropsType,
}