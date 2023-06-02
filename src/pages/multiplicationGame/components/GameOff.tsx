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
import {
  Styledh1,
  TitleBox,
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
    <Wrapper maxWidth={false}>
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

export default GameOff;
