import { useNavigate } from "react-router-dom";
import { ReactElement, Ref, forwardRef } from "react";

import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { TransitionProps } from "@mui/material/transitions";

import { IEndGameDialog } from "../types";
import { DialogRow } from "maincomponents/styledComponents/StyledComponents";
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EndExerciseDialog = ({
  open,
  setOpen,
  resetExercise,
  nrOfWrongAnswers,
  nrOfQuestions,
}: IEndGameDialog) => {
  const navigate = useNavigate();

  const handleNo = () => {
    setOpen(false);
    resetExercise();
    navigate("/");
  };
  const handleYes = () => {
    setOpen(false);
    resetExercise();
  };
  const correctAnswers = nrOfQuestions - nrOfWrongAnswers;
  const score = (correctAnswers / nrOfQuestions) * 100;
  const roundedScore = Math.round(score);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
    >
      <DialogTitle sx={{ fontFamily: "Short stack", textAlign: "center" }}>
        EXERCISE IS COMPLETED
      </DialogTitle>
      <DialogContent>
        <DialogRow>
          {`You have answered ${correctAnswers} out of ${nrOfQuestions} questions correctly,`}
        </DialogRow>
        <DialogRow>
          and your score is <span>{roundedScore} / 100</span>
        </DialogRow>
        <DialogRow>
          {roundedScore > 66 ? "Good job!" : "Could be better next time"}
        </DialogRow>
        <DialogRow>Do you want to continue exercising? </DialogRow>
      </DialogContent>
      <DialogActions sx={{ margin: "0 auto" }}>
        <Button variant="outlined" onClick={handleNo} size="small">
          No, go back to home page
        </Button>
        <Button variant="outlined" onClick={handleYes} size="small">
          Yes !
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndExerciseDialog;
