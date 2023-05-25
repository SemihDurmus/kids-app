import { OptionType, QuestionSetType } from "./types";

const getRandomNr = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

export const handleSelectAnswer = (
  opt: OptionType,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  score: number,
  level: number,
  nrOfWrongAnswers: number,
  setNrOfWrongAnswers: React.Dispatch<React.SetStateAction<number>>,
  nrOfAnsweredQs: number,
  setNrOfAnsweredQs: React.Dispatch<React.SetStateAction<number>>
) => {
  setNrOfAnsweredQs(nrOfAnsweredQs + 1);
  if (opt.isCorrect) {
    setScore(score + Math.floor(level * 1.3));
  } else {
    setNrOfWrongAnswers(nrOfWrongAnswers + 1);
    nrOfWrongAnswers === 2 && setTimeout(() => alert("GAME OVER"));
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
