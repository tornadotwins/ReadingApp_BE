import { ParseDataType } from "@/pages/Translator/types";

type UserRequestType = {
  id?: string;
  username: string;
  password: string;
  isAdmin?: boolean;
}

type TranslatorRequestType = {
  bookInfos: ParseDataType[],
  bookTitle: string,
  language: string,
}

export type {
  UserRequestType,
  TranslatorRequestType,
}