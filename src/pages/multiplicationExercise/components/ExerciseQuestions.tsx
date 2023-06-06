import { Box, TextField } from "@mui/material";
import { ReactElement, useState } from "react";
import styled from "styled-components";

import { IExerciseQuestions } from "../types";
import {
  InputBox,
  SubmitButton,
  QuestionWrapper,
} from "maincomponents/styledComponents/StyledComponents";
import { createStatusContent } from "../utils";

const ExerciseQuestions = ({ questions }: IExerciseQuestions): ReactElement => {
  const [val, setVal] = useState("");
  const [bgColor, setBgColor] = useState("transparent");
  const [qIndex, setQIndex] = useState(0);

  const handleSubmit = () => {
    const nrVal = Number(val);
    const answer = questions[qIndex].nr1 * questions[qIndex].nr2;
    if (answer === nrVal) {
      setBgColor("#44bd32");
    } else {
      setBgColor("#e74c3c");
    }
    setTimeout(() => {
      setBgColor("transparent");
      if (qIndex === questions.length - 1) {
        alert("exercise over");
      } else {
        setQIndex((prev) => prev + 1);
        setVal("");
      }
    }, 900);
  };
  const firstNr = questions[qIndex].nr1;
  const secondNr = questions[qIndex].nr2;
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
          onClick={handleSubmit}
          disabled={val === ""}
        >
          OK
        </SubmitButton>
      </InputBox>
    </QuestionBox>
  );
};

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
