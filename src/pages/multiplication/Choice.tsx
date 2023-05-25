import { Box } from "@mui/material";
import { ReactElement } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Choice = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <BigButton onClick={() => navigate("exercise")}>Exercise</BigButton>
        <BigButton onClick={() => navigate("game")}>Game</BigButton>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  background-color: #ecf0f1;
`;

const BigButton = styled.div`
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  text-align: center;
  border: 1px solid #34495e;
  border-radius: 1rem;
  box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.1);
  font-family: "Short stack", cursive;
  font-weight: bold;
  font-size: 1rem;
  color: #6f1e51;
  &:first-of-type {
    margin-right: 1rem;
    color: #16a085;
  }
  &:hover {
    cursor: pointer;
    background-color: #34495e;
    color: #fff;
  }
`;

export default Choice;
