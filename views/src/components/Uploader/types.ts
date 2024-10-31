import { ChangeEvent } from "react";
import { SelectBoxOption } from "../Base/Select/types";

type UploaderPropsType = {
  language: string | number,
  languages: SelectBoxOption[],
  file: File | null,

  onChangeLanguage: (e: ChangeEvent<{value: unknown}>) => void;
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangeFile: (e: File) => void;
  onChangeUploader: () => void;
}

export type {
  UploaderPropsType,
}
