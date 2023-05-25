import styled from "styled-components";

import { OptionType } from "../types";

const Answers = ({ options, handleClick }: IAnswers) => {
  return (
    <Wrapper>
      {options.map((el, index) => (
        <StyledButton key={index} onClick={() => handleClick(el)}>
          {el.option}
        </StyledButton>
      ))}
    </Wrapper>
  );
};
interface IAnswers {
  options: OptionType[];
  handleClick: (opt: OptionType) => void;
}

const Wrapper = styled.div`
  width: 30vw;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  font-family: "Oswald";
  width: 6rem;
  height: 6rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 2rem;
  color: #fff;
  background-color: #000;
  font-weight: bold;
  &:hover {
    background-color: #2d3436;
    cursor: pointer;
    text-shadow: 0 0 7px #fff, 0 0 9px #fff;
  }
`;

export default Answers;
