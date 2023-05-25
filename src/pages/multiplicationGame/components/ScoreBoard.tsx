import { ReactElement } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

export const ScoreBoard = (props: {
  score: number;
  level: number;
  nrOfWrongAnswers: number;
}): ReactElement => {
  const { score, level, nrOfWrongAnswers } = props;
  return (
    <>
      <Row>
        <RightSide>
          <StyledStack direction="row" spacing={1}>
            <AssetBox>Score</AssetBox>
            <ValueBox>{score}</ValueBox>
          </StyledStack>
          <StyledStack direction="row" spacing={1}>
            <AssetBox>Level</AssetBox>
            <ValueBox>{level}</ValueBox>
          </StyledStack>
        </RightSide>
      </Row>
      <SkullsBox>{Array(nrOfWrongAnswers).fill("💀").join("")}</SkullsBox>
    </>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
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
const SkullsBox = styled.div`
  height: 6rem;
  text-align: center;
  font-size: 5rem;
`;

const StyledStack = styled(Stack)`
  background-color: #ee5a24;
  border: 1px solid #000;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.1);
`;

export default ScoreBoard;
