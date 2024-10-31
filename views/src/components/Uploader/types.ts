import { ChangeEvent } from "react";
import { SelectBoxOption } from "../Base/Select/types";
import { ParseDataType } from "@/pages/Translator/types";

type UploaderPropsType = {
  language: string | number,
  languages: SelectBoxOption[],
  file: File | null,
  headers: string[],
  parsedData: ParseDataType[],

  onChangeLanguage: (e: ChangeEvent<{value: unknown}>) => void;
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangeFile: (e: File) => void;
  onChangeUploader: () => void;
}

export type {
  UploaderPropsType,
}
