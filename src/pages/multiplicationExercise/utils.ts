import { QuestionType } from "./types";
import { shuffleArray } from "utils/shuffleArray";

export const optionsArray = Array.from({ length: 10 }, (_, index) =>
  (index + 1).toString()
);

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const RANGE = [2, 3, 4, 5, 6, 7, 8, 9];

export const refineTitle = (selectionArray: string[]): string => {
  if (selectionArray.length === 1) {
    return `${selectionArray[0]}s`;
  }
  const duplicateArr = [...selectionArray];
  const lastElement = duplicateArr.pop();
  const formattedArray = duplicateArr.join(", ");

  return `${formattedArray} and ${lastElement}s`;
};

export const createQuestions = (
  nrOfQuestions: number,
  selection: string[]
): QuestionType[] => {
  const questionsArray: QuestionType[] = [];
  selection.forEach((el) => {
    RANGE.forEach((item) => {
      questionsArray.push({ nr1: Number(el), nr2: item });
    });
  });
  const shuffledQuestions = shuffleArray(questionsArray);
  if (nrOfQuestions - 1 > shuffledQuestions.length) {
    const newShuffled = [...shuffledQuestions];
    for (let i = shuffledQuestions.length; i < nrOfQuestions; i++) {
      newShuffled.push(shuffledQuestions[i - shuffledQuestions.length]);
    }
    return newShuffled;
  }
  return shuffledQuestions.slice(0, nrOfQuestions);
};

export const createStatusContent = (
  bgColor: string,
  nr1: number,
  nr2: number
): string => {
  if (bgColor === "#44bd32") return "CORRECT!";
  if (bgColor === "#e74c3c") return `WRONG!, Answer is: ${nr1 * nr2}`;
  return "";
};
