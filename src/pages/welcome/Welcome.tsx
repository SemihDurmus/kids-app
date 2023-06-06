import { TextField } from "@mui/material";
import { ReactElement, useRef, useContext } from "react";

import { UserContext } from "../../context/userContext";
import {
  InputBox,
  Styledh1,
  SubmitButton,
  TitleBox,
  Wrapper,
} from "maincomponents/styledComponents/StyledComponents";
import { addUserToStorage } from "utils/addUserToStorage";

export const Welcome = (): ReactElement => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleClick = () => {
    const name = textInputRef?.current?.value;
    if (name) {
      addUserToStorage(name, setCurrentUser);
    }
  };
  if (currentUser.id && currentUser.userName) {
    return (
      <Wrapper maxWidth={false}>
        <TitleBox>
          <Styledh1>Welcome {currentUser.userName}</Styledh1>
          <Styledh1 style={{ marginTop: "2rem" }}>
            Please choose a game from the menu
          </Styledh1>
        </TitleBox>
      </Wrapper>
    );
  }
  return (
    <Wrapper maxWidth={false} sx={{ backgroundColor: "#b8e994" }}>
      <TitleBox>
        <Styledh1>Welcome to Kids App</Styledh1>
      </TitleBox>
      <h4 style={{ textAlign: "center" }}>Please enter your name in the box</h4>
      <InputBox>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          inputRef={textInputRef}
          sx={{ width: "20rem" }}
        />
      </InputBox>
      <InputBox>
        <SubmitButton onClick={handleClick}>submit</SubmitButton>
      </InputBox>
    </Wrapper>
  );
};

export default Welcome;
