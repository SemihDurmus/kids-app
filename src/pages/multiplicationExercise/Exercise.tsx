import styled from "styled-components";
import { Container } from "@mui/material";
import { ReactElement, useState, useEffect, useMemo, useContext } from "react";

import { UserContext } from "../../context/userContext";
import ExerciseOff from "./components/ExerciseOff";

export const Exercise = (): ReactElement => {
  const { currentUser } = useContext(UserContext);

  const [exerciseOn, setExerciseOn] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [nrOfAnsweredQs, setNrOfAnsweredQs] = useState(0);
  const [level, setLevel] = useState(1);
  const [remainingSeconds, setRemainingSeconds] = useState(16 - level);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (!openDialog && exerciseOn) {
      const countdown = setInterval(() => {
        setRemainingSeconds((prevSeconds) =>
          prevSeconds > 0 ? prevSeconds - 1 : 0
        );
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [nrOfAnsweredQs, openDialog, exerciseOn]);

  useEffect(() => {
    if (!remainingSeconds) {
      setNrOfWrongAnswers((pre) => pre + 1);
      setRemainingSeconds(16 - level);
      nrOfWrongAnswers === 2 &&
        setTimeout(() => {
          setOpenDialog(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds]);

  // if (!exerciseOn) {
  return (
    <>
      <ExerciseOff
        setExerciseOn={setExerciseOn}
        setSelection={setSelection}
        selection={selection}
      />
    </>
  );
  // }

  //   const progressBarValue = (remainingSeconds * 100) / (16 - level);

  // const Wrapper = styled(Container)`
  //   padding-top: 2rem;
  //   height: calc(100vh - 4rem);
  // `;
};
export default Exercise;
