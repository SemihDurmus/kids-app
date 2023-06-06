import styled from "styled-components";
import { OptionType } from "../types";

const Answers = ({ options, handleClick }: IAnswers) => {
  return (
    <Wrapper>
      {options.map((el, index) => (
        <OptionButton key={index} onClick={() => handleClick(el)}>
          {el.option}
        </OptionButton>
      ))}
    </Wrapper>
  );
};
interface IAnswers {
  options: OptionType[];
  handleClick: (opt: OptionType) => void;
}

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 6rem;
  width: 100%;
  padding-inline: 8rem;
  line-height: 6rem;
  text-align: center;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-inline: 0;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const OptionButton = styled.button`
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
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    line-height: 2rem;
    font-size: 2rem;
  }
`;

export default Answers;
