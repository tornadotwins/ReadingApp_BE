type RadioOption = {
  value: string | number | boolean;
  label: string;
  disable?: boolean;
};

type RadioProps = {
  label?: string;
  value?: string | boolean;
  options: RadioOption[];
  onChange?: (value: any) => void;
};

export type { RadioProps };
