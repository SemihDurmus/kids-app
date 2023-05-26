import { Container } from "@mui/material";
import { ReactElement, useState, useEffect, useMemo } from "react";

import GameOff from "./components/GameOff";
import Answers from "./components/Answers";
import Question from "./components/Question";
import { ModeType, OptionType } from "./types";
import ScoreBoard from "./components/ScoreBoard";
import EndGameDialog from "./components/EndGameDialog";
import { createQuestionSet, handleSelectAnswer, selectBgColor } from "./utils";

export const MultiplicationGame = (): ReactElement => {
  const [mode, setMode] = useState<ModeType>("gameOff");
  const [score, setScore] = useState(0);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [nrOfAnsweredQs, setNrOfAnsweredQs] = useState(0);
  const [level, setLevel] = useState(1);
  const [remainingSeconds, setRemainingSeconds] = useState(16 - level);
  const [openDialog, setOpenDialog] = useState(false);

  const resetGame = () => {
    setNrOfWrongAnswers(0);
    setNrOfAnsweredQs(0);
    setScore(0);
    setLevel(1);
    setMode("gameOff");
  };
  const handleClick = (opt: OptionType) => {
    handleSelectAnswer(
      opt,
      setScore,
      level,
      setLevel,
      nrOfWrongAnswers,
      setNrOfWrongAnswers,
      nrOfAnsweredQs,
      setNrOfAnsweredQs,
      setRemainingSeconds,
      remainingSeconds,
      setOpenDialog
    );
  };

  const bgColor = selectBgColor(level);
  const { nr1, nr2, options } = useMemo(
    () => createQuestionSet(level),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nrOfAnsweredQs, nrOfWrongAnswers, level, openDialog]
  );

  useEffect(() => {
    if (!openDialog && mode === "gameOn") {
      const countdown = setInterval(() => {
        setRemainingSeconds((prevSeconds) =>
          prevSeconds > 0 ? prevSeconds - 1 : 0
        );
      }, 500);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [nrOfAnsweredQs, openDialog, mode]);

  useEffect(() => {
    if (!remainingSeconds) {
      setNrOfWrongAnswers((pre) => pre + 1);
      setRemainingSeconds(16 - level);
      nrOfWrongAnswers === 2 &&
        setTimeout(() => {
          setOpenDialog(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds]);

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
        remainingSeconds={remainingSeconds}
      />
      <Question nr1={nr1} nr2={nr2} />
      <Answers options={options} handleClick={handleClick} />
      <EndGameDialog
        open={openDialog}
        setOpen={setOpenDialog}
        resetGame={resetGame}
        nrOfAnsweredQs={nrOfAnsweredQs}
        level={level}
        score={score}
      />
    </Container>
  );
};

export default MultiplicationGame;
