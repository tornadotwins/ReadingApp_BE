type SelectBoxOption = {
  value: string | number;
  label: string;
};

type SelectBoxProps = {
  label: string;
  options: SelectBoxOption[];
  value: string | number;
  disabled?: boolean;
  textColor?: string,
  backgroundColor?: string,
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

export type { SelectBoxOption, SelectBoxProps };
