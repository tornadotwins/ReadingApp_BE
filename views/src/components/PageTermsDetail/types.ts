import { AppTextType } from "@/pages/types";

type PageTermsDetailPropsType = {
  terms: AppTextType[];
  language: string;
  currentLanguage: string;

  onInputChange: (id: string, changedVal: string) => void;
}

export type {
  PageTermsDetailPropsType,
}