import { UserType } from "../pages/types";
import { ReactNode } from "react";

type ProtectedRouterPropsType = {
  currentUser: UserType;
  children: ReactNode;
}

export type {
  ProtectedRouterPropsType,
}