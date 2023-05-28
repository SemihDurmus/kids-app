import styled from "styled-components";
import { ReactElement, useRef, useContext } from "react";
import { Button, Container, TextField } from "@mui/material";

import { UserContext } from "../../context/userContext";
import { addUserToStorage } from "utils/adduserToStorage";
import { TitleBox } from "maincomponents/styledComponents/StyledComponents";
import { capitalizeFirstLetters } from "utils/capitalizeFirstLetters";

export const Welcome = (): ReactElement => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleClick = () => {
    const name = textInputRef?.current?.value;
    if (name) {
      const refinedName = capitalizeFirstLetters(name);
      addUserToStorage(refinedName);
      setCurrentUser && setCurrentUser(refinedName);
    }
  };

  if (currentUser) {
    return (
      <Wrapper maxWidth={false}>
        <TitleBox>
          <h1>Welcome {currentUser}</h1>
          <h1 style={{ fontSize: "2rem" }}>
            Please choose a game from the menu
          </h1>
        </TitleBox>
      </Wrapper>
    );
  }
  return (
    <Wrapper maxWidth={false}>
      <TitleBox>
        <h1>Welcome to Kids App</h1>
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
        <StyledButton onClick={handleClick}>submit</StyledButton>
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  background-color: #b8e994;
  height: 92vh;
`;

const InputBox = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  input {
    font-size: 1.2rem;
    font-family: "Short stack", cursive;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    width: 20rem;
    color: #fff;
    background-color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Short stack", cursive;
    border: 1px solid transparent;
    &:hover {
      border-color: #000;
      background-color: #2d3436;
      cursor: pointer;
      text-shadow: 0 0 7px #fff, 0 0 9px #fff;
    }
  }
`;
export default Welcome;
