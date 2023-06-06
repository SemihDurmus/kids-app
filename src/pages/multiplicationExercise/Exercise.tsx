import { ReactElement, useState, useEffect, useMemo } from "react";

import { createQuestions, refineTitle } from "./utils";
import ExerciseOff from "./components/ExerciseOff";
import {
  Styledh1,
  TitleBox,
  Wrapper,
} from "maincomponents/styledComponents/StyledComponents";
import SelectNumberOfQuestions from "./components/SelectNumberOfQuestions";
import ExerciseQuestions from "./components/ExerciseQuestions";

export const Exercise = (): ReactElement => {
  const [exerciseOn, setExerciseOn] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);

  const [showNrOfQuestions, setShowNrOfQuestions] = useState(true);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [nrOfQuestions, setNrOfQuestions] = useState(10);

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

  const questions = createQuestions(nrOfQuestions, selection);
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
        <ExerciseQuestions questions={questions} />
      )}
    </Wrapper>
  );
};
export default Exercise;
