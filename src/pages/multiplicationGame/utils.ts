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
  setNrOfWrongAnswers: React.Dispatch<React.SetStateAction<number>>
) => {
  if (opt.isCorrect) {
    setScore(score + Math.floor(level * 1.3));
  } else if (nrOfWrongAnswers === 3) {
    alert("GAME OVER");
  } else {
    setNrOfWrongAnswers(nrOfWrongAnswers + 1);
  }
};
