import { ReactElement, useState } from "react";

import { OptionType } from "./types";
import { createQuestionSet } from "./utils";

export const MultiplicationGame = (): ReactElement => {
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [level, setLevel] = useState(2);

  const handleSelectAnswer = (opt: OptionType) => {
    if (opt.isCorrect) {
      setScore(score + 1);
    } else if (wrongAnswer === 3) {
      alert("GAME OVER");
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
  };

  const { nr1, nr2, options } = createQuestionSet(level);
  return (
    <div>
      <h1>Game</h1>
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
