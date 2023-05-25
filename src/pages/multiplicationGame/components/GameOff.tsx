import {
  Select,
  Button,
  MenuItem,
  Container,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import styled from "styled-components";

import { ModeType } from "../types";

export const GameOff = ({ setLevel, level, setMode }: IGameOff) => {
  const levelsArray = Array.from({ length: 10 }, (_, index) => index + 1);
  const handleChange = (e: SelectChangeEvent<number>) => {
    setLevel(Number(e.target.value));
  };
  return (
    <Wrapper maxWidth={false}>
      <TitleBox>
        <h1>Multiplication Table Game</h1>
      </TitleBox>
      <ControlsBox>
        <>
          <FormControl sx={{ width: "20rem" }}>
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Level"
              onChange={handleChange}
              size="small"
            >
              {levelsArray.map((el) => (
                <MenuItem value={el}>{`Level: ${el}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "20rem", mt: "3rem" }}
          onClick={() => setMode("gameOn")}
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
const Wrapper = styled(Container)`
  background-color: #ffc312;
`;
const TitleBox = styled.div`
  text-align: center;
  height: 20vh;
  width: 100%;
  line-height: 20vh;
  h1 {
    font-family: "Short stack", cursive;
    font-size: 3rem;
    color: #6f1e51;
    margin: 0;
  }
`;
const ControlsBox = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GameOff;
