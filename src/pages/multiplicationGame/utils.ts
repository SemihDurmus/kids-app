import {
  getUsersFromLocalStorage,
  ScoreType,
} from "utils/getUsersFromLocalStorage";
import { getRandomNr } from "utils/getRandomNr";
import { shuffleArray } from "utils/shuffleArray";

import { OptionType, QuestionSetType } from "./types";

const createWrongOption = (
  options: OptionType[],
  min: number,
  max: number
): OptionType => {
  let num1 = getRandomNr(min, max);
  let num2 = getRandomNr(min, max);
  const optionNrArray = options.map((el) => el.option);
  while (optionNrArray.includes(num1 * num2)) {
    num1 = getRandomNr(min, max);
    num2 = getRandomNr(min, max);
  }
  return { option: num1 * num2, isCorrect: false };
};

export const createQuestionSet = (level: number): QuestionSetType => {
  const min = level === 1 ? 1 : 2;
  const max = level === 1 ? 10 : 9;
  const nr1 = getRandomNr(min, max);
  const nr2 = getRandomNr(min, max);
  const answer = nr1 * nr2;
  const correctOption = { option: answer, isCorrect: true };
  let options = [correctOption];

  for (let i = 0; i < 3; i++) {
    const wrongOption = createWrongOption(options, min, max);
    options.push(wrongOption);
  }
  return {
    nr1,
    nr2,
    options: shuffleArray(options),
  };
};

const increaseLevel = (
  answeredQuestions: number,
  currentLevel: number
): boolean => {
  if (
    currentLevel === 10 ||
    answeredQuestions === 0 ||
    answeredQuestions % 5 !== 0
  ) {
    return false;
  }
  return true;
};

export const handleSelectAnswer = (
  opt: OptionType,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  level: number,
  setLevel: React.Dispatch<React.SetStateAction<number>>,
  nrOfWrongAnswers: number,
  setNrOfWrongAnswers: React.Dispatch<React.SetStateAction<number>>,
  nrOfAnsweredQs: number,
  setNrOfAnsweredQs: React.Dispatch<React.SetStateAction<number>>,
  setRemainingSeconds: React.Dispatch<React.SetStateAction<number>>,
  remainingSeconds: number,
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setNrOfAnsweredQs((prev) => prev + 1);
  setRemainingSeconds(16 - level);
  if (opt.isCorrect) {
    const pointPerLevel = level === 1 ? 1 : Math.floor(level / 2);
    const pointPerSeconds = Math.floor(remainingSeconds / 2);
    setScore((prev) => prev + pointPerLevel + pointPerSeconds);
    const isLevelUp = increaseLevel(nrOfAnsweredQs, level);
    isLevelUp && setLevel((pre) => pre + 1);
  } else {
    setNrOfWrongAnswers((pre) => pre + 1);
    nrOfWrongAnswers === 2 &&
      setTimeout(() => {
        setOpenDialog(true);
      });
  }
};

export const selectBgColor = (level: number): string => {
  switch (level) {
    case 1:
    case 2:
      return "#FEF001";
    case 3:
    case 4:
      return "#FFCE03";
    case 5:
    case 6:
      return "#FD9A01";
    case 7:
    case 8:
      return "#FD6104";
    case 9:
    case 19:
      return "#FF2C05";
    default:
      return "#F00505";
  }
};

export const addScoreToUser = (
  currentUserName: string,
  score: number,
  level: number,
  answeredQuestions: number
) => {
  const parsedUsers = getUsersFromLocalStorage();
  const currentUserIndex = parsedUsers.findIndex(
    (el) => el.userName.toLowerCase() === currentUserName.toLowerCase()
  );
  if (currentUserIndex !== -1) {
    const currentUserInfo = parsedUsers[currentUserIndex];
    const scoreArray = currentUserInfo?.scores || [];
    const newScore: ScoreType = {
      score: score,
      maxLevel: level,
      answeredQuestions: answeredQuestions,
      date: new Date(),
    };
    scoreArray.push(newScore);
    currentUserInfo.scores = scoreArray;
    parsedUsers[currentUserIndex] = currentUserInfo;
    console.log("After game", JSON.stringify(parsedUsers));
    localStorage.setItem("users", JSON.stringify(parsedUsers));
  }
};
