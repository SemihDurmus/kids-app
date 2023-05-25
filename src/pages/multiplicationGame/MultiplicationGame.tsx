import { ReactElement, useState } from "react";

import GameOff from "./components/GameOff";
import { createQuestionSet } from "./utils";
import { ModeType, OptionType } from "./types";

export const MultiplicationGame = (): ReactElement => {
  const [mode, setMode] = useState<ModeType>("gameOff");
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [level, setLevel] = useState(1);

  const handleSelectAnswer = (opt: OptionType) => {
    if (opt.isCorrect) {
      setScore(score + Math.floor(level * 1.3));
    } else if (wrongAnswer === 3) {
      alert("GAME OVER");
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
  };

  const { nr1, nr2, options } = createQuestionSet(level);
  if (mode === "gameOff") {
    return <GameOff setLevel={setLevel} level={level} setMode={setMode} />;
  }
  return (
    <div>
      <h2>{`Score is ${score}`}</h2>
      <h2>{`LEVEL: ${level}`}</h2>
      {Array(wrongAnswer).fill("💀").join("")}
      <h3>{`${nr1} x ${nr2}`}</h3>
      {options.map((el, index) => (
        <button key={index} onClick={() => handleSelectAnswer(el)}>
          {el.option}
        </button>
      ))}
    </div>
  );
};

export default MultiplicationGame;
