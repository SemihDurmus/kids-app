import { ReactElement, useState } from "react";

import GameOff from "./components/GameOff";
import { ModeType, OptionType } from "./types";
import { createQuestionSet, handleSelectAnswer } from "./utils";

export const MultiplicationGame = (): ReactElement => {
  const [mode, setMode] = useState<ModeType>("gameOff");
  const [score, setScore] = useState(0);
  const [nrOfWrongAnswers, setNrOfWrongAnswers] = useState(0);
  const [level, setLevel] = useState(1);

  const handleClick = (opt: OptionType) => {
    handleSelectAnswer(
      opt,
      setScore,
      score,
      level,
      nrOfWrongAnswers,
      setNrOfWrongAnswers
    );
  };

  const { nr1, nr2, options } = createQuestionSet(level);
  if (mode === "gameOff") {
    return <GameOff setLevel={setLevel} level={level} setMode={setMode} />;
  }

  return (
    <div>
      <h2>{`Score is ${score}`}</h2>
      <h2>{`LEVEL: ${level}`}</h2>
      {Array(nrOfWrongAnswers).fill("💀").join("")}
      <h3>{`${nr1} x ${nr2}`}</h3>
      {options.map((el, index) => (
        <button key={index} onClick={() => handleClick(el)}>
          {el.option}
        </button>
      ))}
    </div>
  );
};

export default MultiplicationGame;
