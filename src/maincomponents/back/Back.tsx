import Box from "@mui/material/Box";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Back = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        position: "absolute",
        bottom: "4rem",
      }}
    >
      {currentPath !== "/" && (
        <BackButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </BackButton>
      )}
    </Box>
  );
};

const BackButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  svg {
    vertical-align: middle;
  }
  &:hover {
    cursor: pointer;
    background-color: #34495e;
    svg {
      fill: #fff;
    }
  }
`;

export default Back;
