import { QuestionWrapper } from "maincomponents/styledComponents/StyledComponents";

export const Question = ({ nr1, nr2 }: IQuestion) => {
  return <QuestionWrapper>{`${nr1} x ${nr2}`}</QuestionWrapper>;
};

interface IQuestion {
  nr1: number;
  nr2: number;
}

export default Question;
