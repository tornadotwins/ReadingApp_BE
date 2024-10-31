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
  onUpload: () => void;
}

export type {
  UploaderPropsType,
}
