import { ReactElement } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import { getUserInfoById } from "utils/getUserInfoById";
import ScoreTable from "../../maincomponents/scoreTable/ScoreTable";
import { TitleBox } from "maincomponents/styledComponents/StyledComponents";

export const Profile = (): ReactElement => {
  const { id = "" } = useParams<{ id: string }>();

  const userInfo = getUserInfoById(id);
  console.log(id, userInfo);

  if (userInfo === undefined) {
    return (
      <Wrapper maxWidth={false}>
        <TitleBox>
          <h1>No user information found</h1>
        </TitleBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper maxWidth={false}>
      <TitleBox>
        <h1>{userInfo.userName}</h1>
      </TitleBox>
      <ScoreTable />
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  background-color: #b8e994;
  height: calc(100vh - 4rem);
`;

export default Profile;
