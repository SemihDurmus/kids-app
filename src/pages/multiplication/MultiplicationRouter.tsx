import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import Exercise from "pages/multiplicationExercise/Exercise";
import MultiplicationGame from "pages/multiplicationGame/MultiplicationGame";
import Choice from "./Choice";

export const MultiplicationRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Choice />} />
      <Route path="/game" element={<MultiplicationGame />} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  );
};

export default MultiplicationRouter;
