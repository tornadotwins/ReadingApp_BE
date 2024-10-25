type InputComponentProps = {
  imgSrc?: string;
  label?: string;
  type?: string;
  value?: string;
  error?: string;
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: any) => void;
};

export type { InputComponentProps };
