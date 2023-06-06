import { ReactElement, useState } from "react";

import { refineTitle } from "./utils";
import ExerciseOff from "./components/ExerciseOff";
import {
  Styledh1,
  TitleBox,
  Wrapper,
} from "maincomponents/styledComponents/StyledComponents";
import ExerciseQuestions from "./components/ExerciseQuestions";
import SelectNumberOfQuestions from "./components/SelectNumberOfQuestions";

export const Exercise = (): ReactElement => {
  const [exerciseOn, setExerciseOn] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);

  const [showNrOfQuestions, setShowNrOfQuestions] = useState(true);
  const [nrOfQuestions, setNrOfQuestions] = useState(1);

  const [openDialog, setOpenDialog] = useState(false);

  if (!exerciseOn) {
    return (
      <>
        <ExerciseOff
          setExerciseOn={setExerciseOn}
          setSelection={setSelection}
          selection={selection}
        />
      </>
    );
  }

  return (
    <Wrapper>
      <TitleBox>
        <Styledh1 style={{ color: "#0a3d62" }}>
          Exercises with {refineTitle(selection)}
        </Styledh1>
      </TitleBox>
      {showNrOfQuestions ? (
        <SelectNumberOfQuestions
          nrOfQuestions={nrOfQuestions}
          setNrOfQuestions={setNrOfQuestions}
          setShowNrOfQuestions={setShowNrOfQuestions}
        />
      ) : (
        <ExerciseQuestions
          nrOfQuestions={nrOfQuestions}
          selection={selection}
        />
      )}
    </Wrapper>
  );
};
export default Exercise;
