import { Container } from "@mui/material";
import { ReactElement, useState } from "react";

import GameOff from "./components/GameOff";
import { ModeType, OptionType } from "./types";
import ScoreBoard from "./components/ScoreBoard";
import { createQuestionSet, handleSelectAnswer, selectBgColor } from "./utils";
import Question from "./components/Question";
import Answers from "./components/Answers";

export const MultiplicationGame = (): ReactElement => {
  const [mode, setMode] = useState<ModeType>("gameOff");
  const [score, setScore] = useState(0);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [nrOfAnsweredQs, setNrOfAnsweredQs] = useState(0);
  const [level, setLevel] = useState(1);

  const handleClick = (opt: OptionType) => {
    handleSelectAnswer(
      opt,
      setScore,
      score,
      level,
      nrOfWrongAnswers,
      setNrOfWrongAnswers,
      nrOfAnsweredQs,
      setNrOfAnsweredQs
    );
  };

  const bgColor = selectBgColor(level);

  const { nr1, nr2, options } = createQuestionSet(level);
  if (mode === "gameOff") {
    return <GameOff setLevel={setLevel} level={level} setMode={setMode} />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: bgColor, pt: 2, height: "92vh" }}
    >
      <ScoreBoard
        score={score}
        level={level}
        nrOfWrongAnswers={nrOfWrongAnswers}
      />
      <Question nr1={nr1} nr2={nr2} />
      <Answers options={options} handleClick={handleClick} />
    </Container>
  );
};

export default MultiplicationGame;
