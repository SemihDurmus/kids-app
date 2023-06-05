import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import { Button, Container } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { IExerciseOff } from "../types";
import {
  Styledh1,
  TitleBox,
} from "maincomponents/styledComponents/StyledComponents";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const optionsArray = Array.from({ length: 10 }, (_, index) =>
  (index + 1).toString()
);

export default function ExerciseOff({
  selection,
  setSelection,
  setExerciseOn,
}: IExerciseOff) {
  const handleChange = (event: SelectChangeEvent<typeof selection>) => {
    const {
      target: { value },
    } = event;
    setSelection(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Wrapper maxWidth={false}>
      <TitleBox>
        <Styledh1>Multiplication Table Exercise</Styledh1>
      </TitleBox>
      <ControlsBox>
        <FormControl sx={{ m: 1, width: 420 }}>
          <InputLabel id="demo-multiple-chip-label">Select levels</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selection}
            onChange={handleChange}
            input={
              <OutlinedInput id="select-multiple-chip" label="Select levels" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {optionsArray.map((opt) => (
              <MenuItem
                key={opt}
                value={opt}
                sx={{
                  fontFamily: "Short stack",
                  fontWeight: "bold",
                  color: "turquoise",
                }}
              >
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "20rem", mt: "3rem" }}
          onClick={() => setExerciseOn(true)}
        >
          Start Exercising
        </Button>
      </ControlsBox>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  background-color: #ffc312;
  height: calc(100vh - 4rem);
`;

const ControlsBox = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
