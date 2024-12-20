import { RefObject } from "react";

type TextAreaType = {
  required?: boolean;
  label?: string;
  value?: string;
  type?: string;
  reference?: RefObject<HTMLDivElement>;
  placeholder?: string;
  error?: string;
  name?: string;
  minLength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type { TextAreaType };