import { ChangeEvent } from "react"

type FilePickerPropsType = {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type {
  FilePickerPropsType,
}