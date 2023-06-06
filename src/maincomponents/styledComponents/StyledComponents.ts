import styled from "styled-components";
import { Button, Container } from "@mui/material";

export const TitleBox = styled.div`
  padding-top: 3rem;
  text-align: center;
  height: 4rem;
  width: 100%;
`;

export const Styledh1 = styled.h1`
  font-family: "Short stack", cursive;
  color: #6f1e51;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ControlsBox = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Container)`
  height: calc(100vh - 4rem);
`;

export const InputBox = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  input {
    font-size: 1.2rem;
    font-family: "Short stack", cursive;
  }
`;

export const SubmitButton = styled(Button)`
  &.MuiButton-root {
    width: 20rem;
    color: #fff;
    background-color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Short stack", cursive;
    border: 1px solid transparent;
    &:hover {
      border-color: #000;
      background-color: #2d3436;
      cursor: pointer;
      text-shadow: 0 0 7px #fff, 0 0 9px #fff;
    }
    ${({ disabled }) => disabled && `background-color: #95a5a6;`}
  }
`;

export const QuestionWrapper = styled.div`
  width: 14rem;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  font-size: 5rem;
  font-family: "Oswald";
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1.5rem;
  color: cyan;
  background-color: black;
  @media (max-width: 768px) {
    width: 8rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 3rem;
    margin: 1rem auto;
  }
`;

export const DialogRow = styled.p`
  font-family: "Short stack";
  &:last-of-type {
    color: #d35400;
    font-weight: bold;
  }
  span {
    color: #c0392b;
    font-weight: bold;
  }
`;
