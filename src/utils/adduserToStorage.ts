export const getUsers = (): UserType[] => {
  const usersData = localStorage.getItem("users");
  return JSON.parse(usersData || "[]");
};

export const addUserToStorage = (submittedName: string) => {
  const parsedUsers = getUsers();
  const submittedNameExists = parsedUsers.some(
    (el) => el.userName.toLowerCase() === submittedName.toLowerCase()
  );
  if (!submittedNameExists) {
    const newEntry: UserType = { userName: submittedName };
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
  userName: string;
  scores?: ScoreType[];
};
