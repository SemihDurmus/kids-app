import { createContext } from "react";

export const UserContext = createContext<IUserContext>({ currentUser: "" });

export interface IUserContext {
  currentUser: string;
  setCurrentUser?: React.Dispatch<React.SetStateAction<string>>;
}
