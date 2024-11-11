import { ChangeEvent } from "react";
import { SelectBoxOption } from "../Base/Select/types";
import { ParseDataType } from "@/pages/Translator/types";

type ImporterPropsType = {
  language: string | number;
  languageLabel: string;
  languages: SelectBoxOption[];
  file: File | null;
  headers: string[],
  parsedData: ParseDataType[];
  missedFields: string[];
  error: string;

  onChangeLanguage: (event: React.ChangeEvent<{value: unknown}>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
};

type ImporterLanguageType = {
  label: string,
  value: string,
}

export type {
  ImporterPropsType,
  ImporterLanguageType,
};
