export type OptionType = { option: number; isCorrect: boolean };
export type QuestionSetType = {
  nr1: number;
  nr2: number;
  options: OptionType[];
};
export type ModeType = "gameOn" | "gameOff";
