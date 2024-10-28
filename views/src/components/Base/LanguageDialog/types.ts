type LanguageDialogPropsType = {
  isOpen: boolean;
  type?: string;
  languages: string[];
  onConfirm: (language: string) => void;
  onCancel: () => void;
}

export type {
  LanguageDialogPropsType,
}