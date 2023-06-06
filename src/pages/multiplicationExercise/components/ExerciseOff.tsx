import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { IExerciseOff } from "../types";
import {
  Wrapper,
  Styledh1,
  TitleBox,
  ControlsBox,
} from "maincomponents/styledComponents/StyledComponents";
import { ITEM_HEIGHT, ITEM_PADDING_TOP, optionsArray } from "../utils";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
    <Wrapper maxWidth={false} sx={{ backgroundColor: "#b8e994" }}>
      <TitleBox>
        <Styledh1 style={{ color: "#0a3d62" }}>
          Multiplication Table Exercise
        </Styledh1>
      </TitleBox>
      <ControlsBox>
        <FormControl
          sx={{
            m: 1,
            width: 420,
            "@media screen and (max-width: 768px)": {
              width: 300,
            },
          }}
        >
          <InputLabel id="multiple-chip-label">Select levels</InputLabel>
          <Select
            labelId="multiple-chip-label"
            id="multiple-chip"
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
                  color: "#60a3bc",
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
          sx={{
            width: "20rem",
            mt: "3rem",
            "@media screen and (max-width: 768px)": {
              width: "16rem",
            },
          }}
          onClick={() => setExerciseOn(true)}
          disabled={!selection.length}
        >
          Start Exercise
        </Button>
      </ControlsBox>
    </Wrapper>
  );
}
