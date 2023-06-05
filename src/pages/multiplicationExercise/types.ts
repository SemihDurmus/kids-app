export interface IExerciseOff {
  setSelection: React.Dispatch<React.SetStateAction<string[]>>;
  selection: string[];
  setExerciseOn: React.Dispatch<React.SetStateAction<boolean>>;
}
