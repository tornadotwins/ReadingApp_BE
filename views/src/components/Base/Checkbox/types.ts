import { RefObject } from "react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  reference?: RefObject<HTMLDivElement>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLLabelElement>) => void;
  onChange: (event: any) => void;
};

export type { CheckboxProps };
