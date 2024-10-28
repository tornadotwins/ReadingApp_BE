type DeleteDialogPropsType  = {
  isOpen: boolean;
  title: string;
  content: string;
  onDelete: () => void;
  onCancel: () => void;
}

export type {
  DeleteDialogPropsType,
}