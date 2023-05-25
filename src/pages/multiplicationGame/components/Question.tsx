import styled from "styled-components";

export const Question = ({ nr1, nr2 }: IQuestion) => {
  return <Wrapper>{`${nr1} x ${nr2}`}</Wrapper>;
};

interface IQuestion {
  nr1: number;
  nr2: number;
}

const Wrapper = styled.div`
  width: 30vw;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  font-size: 5rem;
  font-family: "Oswald";
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
export default Question;
