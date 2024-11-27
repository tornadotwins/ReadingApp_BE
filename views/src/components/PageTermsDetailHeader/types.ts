import { LanguageType } from "@/pages/types";

type PageTermsDetailHeaderPropsType = {
  language: string;
  languages: LanguageType[];
  currentLanguage: string;
  currentLanguageLabel: string;
  defaultLanguage: string;
  disable?: boolean;

  onChangeDefaultLanguage: (languageCode: string) => void;
  onSave: () => void;
}

export type {
  PageTermsDetailHeaderPropsType,
}