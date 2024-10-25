import { CSSProperties, RefObject } from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  style?: CSSProperties;
  reference?: RefObject<HTMLButtonElement>;
  onClick: () => void;
};

export type { ButtonProps };
