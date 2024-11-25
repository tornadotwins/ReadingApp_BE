type SwitchProps = {
  label: string;
  value: boolean;
  labelValue?: boolean;
  disable?: boolean;
  onChange: (value: boolean) => void;
};

export type { SwitchProps };
