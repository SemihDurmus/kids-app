export const getUsers = (): UserType[] => {
  const usersData = localStorage.getItem("users");
  return JSON.parse(usersData || "[]");
};

export const addUserToStorage = ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const parsedUsers = getUsers();
  const submittedNameExists = parsedUsers.some(
    (el) => el.userName.toLowerCase() === name.toLowerCase()
  );
  if (!submittedNameExists) {
    const newEntry: UserType = { id, userName: name };
    parsedUsers.push(newEntry);
    localStorage.setItem("users", JSON.stringify(parsedUsers));
  }
};
export type ScoreType = {
  score: number;
  maxLevel: number;
  answeredQuestions: number;
  date: Date;
};

type UserType = {
  id: string;
  userName: string;
  scores?: ScoreType[];
};
