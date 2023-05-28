import { getUsersFromLocalStorage, UserType } from "./getUsersFromLocalStorage";

export const getUserInfoById = (id: string): UserType | undefined => {
  const parsedUsers = getUsersFromLocalStorage();
  const currentUserInfo = parsedUsers.find((el) => el.id === id);
  if (currentUserInfo) {
    return currentUserInfo;
  }
};
