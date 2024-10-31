import { ChangeEvent } from "react";
import { SelectBoxOption } from "../Base/Select/types";

type ImporterPropsType = {
  language: string | number;
  languages: SelectBoxOption[];
  file: File | null;

  onChangeLanguage: (event: React.ChangeEvent<{value: unknown}>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeFile: (file: File) => void;
};

type ImporterLanguageType = {
  label: string,
  value: string,
}

export type {
  ImporterPropsType,
  ImporterLanguageType,
};
