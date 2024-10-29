import { RoleType } from "@/pages/types";

type DeleteDialogPropsType = {
  isOpen: boolean;
  title: string;
  content: string;
  roles: RoleType[];
  onDelete: (language: string) => void;
  onCancel: () => void;
}

export type {
  DeleteDialogPropsType,
}