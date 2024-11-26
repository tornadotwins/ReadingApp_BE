import { LanguageType } from "@/pages/types";

type PageTermsDetailHeaderPropsType = {
  language: string;
  languages: LanguageType[];
  currentLanguage: string;

  onSave: () => void;
}

export type {
  PageTermsDetailHeaderPropsType,
}