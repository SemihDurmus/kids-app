export const addUserToStorage = (submittedName: string) => {
  const usersData = localStorage.getItem("users");
  const parsedUsers: UserType[] = JSON.parse(usersData || "[]");
  const submittedNameExists = parsedUsers.some(
    (el) => el.userName.toLowerCase() === submittedName.toLowerCase()
  );
  if (!submittedNameExists) {
    const newEntry: UserType = { userName: submittedName };
    parsedUsers.push(newEntry);
    localStorage.setItem("users", JSON.stringify(parsedUsers));
  }
};

type UserType = {
  userName: string;
  scores?: [
    {
      score: number;
      maxLevel: number;
      date: Date;
    }
  ];
};
