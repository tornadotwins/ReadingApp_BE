import { AppTextType } from "@/pages/types";

type PageTermsDetailPropsType = {
  terms: AppTextType[];
  currentLanguage: string;
  defaultLanguage: string;

  onInputChange: (id: string, changedVal: string) => void;
}

export type {
  PageTermsDetailPropsType,
}