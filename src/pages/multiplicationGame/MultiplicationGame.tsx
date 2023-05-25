import { Container } from "@mui/material";
import { ReactElement, useState, useEffect, useMemo } from "react";

import GameOff from "./components/GameOff";
import Answers from "./components/Answers";
import Question from "./components/Question";
import { ModeType, OptionType } from "./types";
import ScoreBoard from "./components/ScoreBoard";
import { createQuestionSet, handleSelectAnswer, selectBgColor } from "./utils";

export const MultiplicationGame = (): ReactElement => {
  const [mode, setMode] = useState<ModeType>("gameOff");
  const [score, setScore] = useState(0);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [nrOfAnsweredQs, setNrOfAnsweredQs] = useState(0);
  const [level, setLevel] = useState(1);
  const [remainingSeconds, setRemainingSeconds] = useState(16 - level);

  const handleClick = (opt: OptionType) => {
    handleSelectAnswer(
      opt,
      setScore,
      score,
      level,
      nrOfWrongAnswers,
      setNrOfWrongAnswers,
      nrOfAnsweredQs,
      setNrOfAnsweredQs,
      setRemainingSeconds
    );
  };

  const bgColor = selectBgColor(level);
  const { nr1, nr2, options } = useMemo(
    () => createQuestionSet(level),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nrOfAnsweredQs, nrOfWrongAnswers, level]
  );

  useEffect(() => {
    if (mode === "gameOn") {
      const countdown = setInterval(() => {
        setRemainingSeconds((prevSeconds) =>
          prevSeconds > 0 ? prevSeconds - 1 : 0
        );
      }, 500);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [nrOfAnsweredQs, mode]);

  useEffect(() => {
    if (!remainingSeconds) {
      setNrOfAnsweredQs((pre) => pre + 1);
      setNrOfWrongAnswers((pre) => pre + 1);
      setRemainingSeconds(16 - level);
      nrOfWrongAnswers === 2 && setTimeout(() => setMode("gameOff"));
    }
  }, [remainingSeconds]);

  if (mode === "gameOff") {
    return <GameOff setLevel={setLevel} level={level} setMode={setMode} />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: bgColor, pt: 2, height: "92vh" }}
    >
      <h1>{remainingSeconds}</h1>
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
