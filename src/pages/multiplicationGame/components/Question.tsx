import styled from "styled-components";

export const Question = ({ nr1, nr2 }: IQuestion) => {
  return <Wrapper>{`${nr1} x ${nr2}`}</Wrapper>;
};

interface IQuestion {
  nr1: number;
  nr2: number;
}

const Wrapper = styled.div`
  width: 12rem;
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
export default Question;
