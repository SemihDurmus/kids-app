import { createContext } from "react";

export const UserContext = createContext<IUserContext>({
  currentUser: { id: "", userName: "" },
});

export interface IUserContext {
  currentUser: { id: string; userName: string };
  setCurrentUser?: React.Dispatch<
    React.SetStateAction<{
      id: string;
      userName: string;
    }>
  >;
}
