import { createContext } from "react";

export const UserContext = createContext<IUserContext>({
  currentUser: { id: "", name: "" },
});

export interface IUserContext {
  currentUser: { id: string; name: string };
  setCurrentUser?: React.Dispatch<
    React.SetStateAction<{
      id: string;
      name: string;
    }>
  >;
}
