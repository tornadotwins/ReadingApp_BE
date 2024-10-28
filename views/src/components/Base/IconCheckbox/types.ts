type InputComponentProps = {
  imgSrc?: string;
  label?: string;
  value?: string;
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { InputComponentProps };
