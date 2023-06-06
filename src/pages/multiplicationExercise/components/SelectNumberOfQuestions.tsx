import { ReactElement } from "react";
import { TextField } from "@mui/material";

import { refineHelperText } from "../utils";
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
  const error = nrOfQuestions > 10 || nrOfQuestions <= 0;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNrOfQuestions(Number(e.target.value));
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
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="number"
          error={error}
          sx={{ width: "6rem" }}
          defaultValue={nrOfQuestions}
          helperText={refineHelperText(nrOfQuestions)}
          onChange={handleChange}
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
          disabled={error}
        >
          OK
        </SubmitButton>
      </InputBox>
    </div>
  );
};

export default SelectNumberOfQuestions;
