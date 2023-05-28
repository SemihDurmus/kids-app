export const getUsersFromLocalStorage = (): UserType[] => {
  const usersData = localStorage.getItem("users");
  return JSON.parse(usersData || "[]");
};

export type ScoreType = {
  score: number;
  maxLevel: number;
  answeredQuestions: number;
  date: Date;
};

export type UserType = {
  id: string;
  userName: string;
  scores?: ScoreType[];
};
