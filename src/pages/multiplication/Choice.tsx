import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Choice = (): ReactElement => {
  return (
    <div>
      <Link to="exercise">Exercise </Link>
      <Link to="game">Game</Link>
    </div>
  );
};

export default Choice;
