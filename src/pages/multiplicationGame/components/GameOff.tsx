import {
  Select,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

import { ModeType } from "../types";
import {
  Wrapper,
  Styledh1,
  TitleBox,
  ControlsBox,
} from "maincomponents/styledComponents/StyledComponents";

export const GameOff = ({ setLevel, level, setMode }: IGameOff) => {
  const levelsArray = Array.from({ length: 10 }, (_, index) => index + 1);
  const handleChange = (e: SelectChangeEvent<number>) => {
    setLevel(Number(e.target.value));
  };
  const handleStartGame = () => setMode("gameOn");

  const selectStyle = {
    fontFamily: "Short stack",
    color: "#EE5A24",
    fontWeight: "bold",
  };
  return (
    <Wrapper maxWidth={false} sx={{ backgroundColor: "ffc312" }}>
      <TitleBox>
        <Styledh1>Multiplication Table Game</Styledh1>
      </TitleBox>
      <ControlsBox>
        <FormControl sx={{ width: "20rem" }}>
          <InputLabel id="demo-simple-select-label">Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={level}
            label="Level"
            onChange={handleChange}
            size="small"
            sx={{ ...selectStyle, color: "#6F1E51" }}
          >
            {levelsArray.map((el) => (
              <MenuItem
                key={el}
                sx={selectStyle}
                value={el}
              >{`Level: ${el}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "20rem", mt: "3rem" }}
          onClick={handleStartGame}
        >
          Start Game
        </Button>
      </ControlsBox>
    </Wrapper>
  );
};
interface IGameOff {
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default GameOff;
