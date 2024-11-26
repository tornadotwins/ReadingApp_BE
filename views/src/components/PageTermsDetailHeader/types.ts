import { LanguageType } from "@/pages/types";

type PageTermsDetailHeaderPropsType = {
  language: string;
  languages: LanguageType[];
  currentLanguage: string;
  disable: boolean;

  onSave: () => void;
}

export type {
  PageTermsDetailHeaderPropsType,
}