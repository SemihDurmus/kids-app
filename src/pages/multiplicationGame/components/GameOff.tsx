import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

import { ModeType } from "../types";

export const GameOff = ({ setLevel, level, setMode }: IGameOff) => {
  const levelsArray = Array.from({ length: 10 }, (_, index) => index + 1);
  const handleChange = (e: SelectChangeEvent<number>) => {
    setLevel(Number(e.target.value));
  };
  return (
    <>
      <h1>Game</h1>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          label="Level"
          onChange={handleChange}
        >
          {levelsArray.map((el) => (
            <MenuItem value={el}>{`Level: ${el}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={() => setMode("gameOn")}>Start Game</button>
    </>
  );
};
interface IGameOff {
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
export default GameOff;
