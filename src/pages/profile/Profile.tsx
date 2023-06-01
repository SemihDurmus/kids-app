import { ReactElement } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import ScoreTable from "./scoreTable/ScoreTable";
import { getUserInfoById } from "utils/getUserInfoById";
import {
  Styledh1,
  TitleBox,
} from "maincomponents/styledComponents/StyledComponents";

export const Profile = (): ReactElement => {
  const { id = "" } = useParams<{ id: string }>();

  const userInfo = getUserInfoById(id);

  if (userInfo === undefined) {
    return (
      <Wrapper maxWidth={false}>
        <TitleBox>
          <Styledh1>No user information found</Styledh1>
        </TitleBox>
      </Wrapper>
    );
  }

  const { scores } = userInfo;
  const hasScores = scores !== undefined && !!scores.length;

  return (
    <Wrapper maxWidth={false}>
      <TitleBox>
        <Styledh1>{userInfo.userName}</Styledh1>
      </TitleBox>
      {hasScores ? (
        <ScoreTable scores={scores} />
      ) : (
        <h6>You have no scores yet</h6>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  background-color: #b8e994;
  height: calc(100vh - 4rem);
`;

export default Profile;
