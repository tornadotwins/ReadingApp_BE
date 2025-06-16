import {
  CSSProperties,
  ReactNode,
  RefObject
} from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  color?: 'primary' | 'secondary';
  style?: CSSProperties;
  reference?: RefObject<HTMLButtonElement>;
  tooltip?: string;

  onClick: () => void;
};

export type { ButtonProps };
