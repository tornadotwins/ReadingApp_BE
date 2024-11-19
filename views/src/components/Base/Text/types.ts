type TextProps = {
  children?: string;
  fontWeight?: string;
  fontSize?: number;
  fontStyle?: string;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  color?: string;
  hasUnderline?: boolean;
  onClick?: () => void;
}

export type { TextProps };
