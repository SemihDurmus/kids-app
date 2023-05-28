import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactElement, Ref, forwardRef } from "react";

import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EndGameDialog = ({
  open,
  setOpen,
  resetGame,
  nrOfAnsweredQs,
  level,
  score,
}: IEndGameDialog) => {
  const navigate = useNavigate();

  const handleNo = () => {
    setOpen(false);
    resetGame();
    navigate("/");
  };
  const handleYes = () => {
    setOpen(false);
    resetGame();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
    >
      <DialogTitle sx={{ fontFamily: "Short stack", textAlign: "center" }}>
        GAME IS OVER
      </DialogTitle>
      <DialogContent>
        <Row>{score > 10 ? "Good job!" : "Could be better next time"}</Row>
        <Row>
          You answered <span>{nrOfAnsweredQs}</span> questions
        </Row>
        <Row>
          You have been up to level <span>{level}</span>
        </Row>
        <Row>
          Your score is <span>{score}</span>
        </Row>
        <Row>Do you want to play a new game? </Row>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleNo}>
          No, go back to home page
        </Button>
        <Button variant="outlined" onClick={handleYes}>
          Yes !
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface IEndGameDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
  nrOfAnsweredQs: number;
  level: number;
  score: number;
}

const Row = styled.p`
  font-family: "Short stack";
  &:last-of-type {
    color: #d35400;
    font-weight: bold;
  }
  span {
    color: #c0392b;
    font-weight: bold;
  }
`;

export default EndGameDialog;
