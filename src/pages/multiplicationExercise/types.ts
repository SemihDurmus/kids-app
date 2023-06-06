export interface IExerciseOff {
  setSelection: React.Dispatch<React.SetStateAction<string[]>>;
  selection: string[];
  setExerciseOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISetNumberOfQuestions {
  nrOfQuestions: number;
  setNrOfQuestions: React.Dispatch<React.SetStateAction<number>>;
  setShowNrOfQuestions: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IExerciseQuestions {
  nrOfQuestions: number;
  selection: string[];
}

export type QuestionType = { nr1: number; nr2: number };
