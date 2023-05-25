import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import Choice from "./Choice";
import Exercise from "pages/multiplicationExercise/Exercise";
import MultiplicationGame from "pages/multiplicationGame/MultiplicationGame";

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
