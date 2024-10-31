import { ChangeEvent } from "react"

type FilePickerPropsType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChange: (e: File) => void
}

export type {
  FilePickerPropsType,
}