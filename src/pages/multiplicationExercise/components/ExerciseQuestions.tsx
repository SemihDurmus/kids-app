import { Box, TextField } from "@mui/material";
import { ReactElement, useMemo, useState } from "react";
import styled from "styled-components";

import { IExerciseQuestions } from "../types";
import { createQuestions, createStatusContent } from "../utils";
import {
  InputBox,
  SubmitButton,
  QuestionWrapper,
} from "maincomponents/styledComponents/StyledComponents";

const ExerciseQuestions = ({
  nrOfQuestions,
  selection,
}: IExerciseQuestions): ReactElement => {
  const [val, setVal] = useState("");
  const [blockSubmit, setBlockSubmit] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [qIndex, setQIndex] = useState(0);

  const questions = useMemo(
    () => createQuestions(nrOfQuestions, selection),
    [nrOfQuestions]
  );

  const [scoreArray, setScoreArrray] = useState<string[]>(
    Array(questions.length).fill("#efefef")
  );

  const firstNr = questions[qIndex].nr1;
  const secondNr = questions[qIndex].nr2;

  const handleSubmit = (val: string): void => {
    const isCorrect = firstNr * secondNr === Number(val);
    const colorIndicator = isCorrect ? "#44bd32" : "#e74c3c";
    setBgColor(colorIndicator);
    const duplicateScore = [...scoreArray];
    duplicateScore[qIndex] = colorIndicator;
    setScoreArrray(duplicateScore);

    setTimeout(() => {
      setBgColor("transparent");
      setBlockSubmit(true);
      if (qIndex === questions.length - 1) {
        alert("exercise over");
      } else {
        setQIndex((prev) => prev + 1);
        setVal("");
        setBlockSubmit(false);
      }
    }, 900);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !blockSubmit) {
      setBlockSubmit(true);
      handleSubmit(val);
    }
  };
  const status = createStatusContent(bgColor, firstNr, secondNr);
  return (
    <QuestionBox sx={{ backgroundColor: bgColor }}>
      <StatusBox>{status}</StatusBox>
      <QuestionWrapper>{`${firstNr} x ${secondNr}`}</QuestionWrapper>
      <InputBox>
        <TextField
          id="exercise-answer"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "6rem" }}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={handleKeyDown}
          value={val}
        />
      </InputBox>
      <InputBox>
        <SubmitButton
          sx={{
            "&.MuiButton-root": {
              width: "6rem",
            },
          }}
          onClick={() => handleSubmit(val)}
          disabled={val === "" || blockSubmit}
        >
          OK
        </SubmitButton>
      </InputBox>
      <ScoreBox>
        {scoreArray.map((el, i) => (
          <MiniBox key={i} sx={{ backgroundColor: el }}>
            {i + 1}
          </MiniBox>
        ))}
      </ScoreBox>
    </QuestionBox>
  );
};

const ScoreBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const MiniBox = styled(Box)`
  font-family: "Short stack";
  width: 2rem;
  text-align: center;
  border: 1px solid #000;
`;
const QuestionBox = styled(Box)`
  width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1.5rem;
`;
const StatusBox = styled(Box)`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Short stack";
  color: #efefef;
  width: 100%;
  height: 2.4rem;
`;

export default ExerciseQuestions;
