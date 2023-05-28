import { v4 as uuidv4 } from "uuid";
import { capitalizeFirstLetters } from "./capitalizeFirstLetters";
import { UserType, getUsersFromLocalStorage } from "./getUsersFromLocalStorage";

export const addUserToStorage = (
  name: string,
  setCurrentUser?: React.Dispatch<
    React.SetStateAction<{
      id: string;
      userName: string;
    }>
  >
): void => {
  const parsedUsers = getUsersFromLocalStorage();
  const userWithSameName = parsedUsers.find(
    (el) => el.userName.toLowerCase() === name.toLowerCase()
  );
  if (setCurrentUser) {
    if (userWithSameName === undefined) {
      const shortId = uuidv4().slice(0, 8);
      const refinedName = capitalizeFirstLetters(name);
      const newUser: UserType = { id: shortId, userName: refinedName };
      parsedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(parsedUsers));
      setCurrentUser(newUser);
    } else {
      const { id, userName } = userWithSameName;
      setCurrentUser({ id, userName });
    }
  }
};
