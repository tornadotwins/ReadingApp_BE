import { RefObject } from "react";

type InputType = {
  required?: boolean;
  label?: string;
  value?: string;
  reference?: RefObject<HTMLDivElement>;
  placeholder?: string;
  error?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type { InputType };