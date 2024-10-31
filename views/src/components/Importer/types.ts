import { ChangeEvent } from "react";
import { SelectBoxOption } from "../Base/Select/types";
import { ParseDataType } from "@/pages/Translator/types";

type ImporterPropsType = {
  language: string | number;
  languages: SelectBoxOption[];
  file: File | null;
  headers: string[],
  parsedData: ParseDataType[];

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
