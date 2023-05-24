import { OptionType, QuestionSetType } from "./types";

const createRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createWrongOption = (
  options: OptionType[],
  min: number,
  max: number
): OptionType => {
  let num1 = createRandomNumber(min, max);
  let num2 = createRandomNumber(min, max);
  const optionNrArray = options.map((el) => el.option);
  while (optionNrArray.includes(num1 * num2)) {
    num1 = createRandomNumber(min, max);
    num2 = createRandomNumber(min, max);
  }
  return { option: num1 * num2, isCorrect: false };
};

const shuffleArray = (array: OptionType[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const createQuestionSet = (level: number): QuestionSetType => {
  const min = level;
  const max = level === 1 ? 10 : 9;
  const nr1 = createRandomNumber(min, max);
  const nr2 = createRandomNumber(min, max);
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
