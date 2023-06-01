import { ReactElement } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { Box, LinearProgress } from "@mui/material";

export const ScoreBoard = (props: {
  score: number;
  level: number;
  nrOfWrongAnswers: number;
  remainingSeconds: number;
  progressBarValue: number;
}): ReactElement => {
  const { score, level, nrOfWrongAnswers, remainingSeconds, progressBarValue } =
    props;
  return (
    <div>
      <TopSection>
        <TimerBox>
          {remainingSeconds && <Timer>{remainingSeconds}</Timer>}
        </TimerBox>
        <ScoreAndLevelBox>
          <StyledStack direction="row" spacing={1}>
            <AssetBox>Score</AssetBox>
            <ValueBox>{score}</ValueBox>
          </StyledStack>
          <StyledStack direction="row" spacing={1}>
            <AssetBox>Level</AssetBox>
            <ValueBox>{level}</ValueBox>
          </StyledStack>
        </ScoreAndLevelBox>
      </TopSection>
      <SkullsBox>{Array(nrOfWrongAnswers).fill("💀").join("")}</SkullsBox>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LinearProgress
          variant="determinate"
          value={progressBarValue}
          sx={{
            height: 12,
            width: "50%",
            textAlign: "center",
            backgroundColor: "black",
            transform: "rotateY(-180deg)",
            borderRadius: "2rem",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#00cec9",
            },
            "@media screen and (max-width: 768px)": {
              width: "90%",
            },
          }}
        />
      </Box>
    </div>
  );
};

const TopSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TimerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = styled.div`
  font-size: 2.5rem;
  font-family: "Oswald";
  border: 2px solid red;
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  border-radius: 50%;
  text-align: center;
  margin-left: 7.5rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-block: 1rem;
  }
`;

const ScoreAndLevelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
  }
`;
const AssetBox = styled.div`
  width: 3rem;
  text-align: left;
  font-size: 1.5rem;
  font-family: "Oswald";
  padding: 0.2rem;
  padding-left: 0.5rem;
  color: white;
`;
const ValueBox = styled(AssetBox)`
  width: 3rem;
  text-align: center;
`;
const StyledStack = styled(Stack)`
  background-color: #ee5a24;
  border: 1px solid #000;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.1);
`;
const SkullsBox = styled.div`
  height: 6rem;
  text-align: center;
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    height: 4rem;
  }
`;

export default ScoreBoard;
