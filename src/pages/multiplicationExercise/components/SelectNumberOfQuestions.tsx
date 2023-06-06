import { ReactElement } from "react";
import { Slider } from "@mui/material";

import { ISetNumberOfQuestions } from "../types";
import {
  InputBox,
  SubmitButton,
} from "maincomponents/styledComponents/StyledComponents";

export const SelectNumberOfQuestions = ({
  nrOfQuestions,
  setNrOfQuestions,
  setShowNrOfQuestions,
}: ISetNumberOfQuestions): ReactElement => {
  const handleChange = (e: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setNrOfQuestions(newValue);
    }
  };
  const handleClick = () => {
    setShowNrOfQuestions(false);
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        How many questions you want to answer?
      </h4>
      <InputBox>
        <Slider
          aria-label="Small steps"
          value={nrOfQuestions}
          step={1}
          marks
          min={1}
          max={50}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </InputBox>
      <InputBox>
        <SubmitButton
          sx={{
            "&.MuiButton-root": {
              width: "6rem",
            },
          }}
          onClick={handleClick}
        >
          Start
        </SubmitButton>
      </InputBox>
    </div>
  );
};

export default SelectNumberOfQuestions;
