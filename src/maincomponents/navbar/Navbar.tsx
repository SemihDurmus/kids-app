import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AccountMenu from "./AccountMenu";
import { UserContext } from "../../context/userContext";

export const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const hasNameAndId = currentUser.id && currentUser.userName;

  const handleLogout = () => {
    setCurrentUser && setCurrentUser({ id: "", userName: "" });
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, height: "4rem", backgroundColor: "#6F1E51" }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                lineHeight: "0.5rem",
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <MenuIcon sx={{ color: "#ffc312" }} />
            </IconButton>
            <Typography
              variant="h6"
              onClick={() => navigate("/")}
              sx={{
                flexGrow: 1,
                fontFamily: "Oswald",
                color: "#ffc312",
                "&:hover": {
                  cursor: "pointer",
                  textShadow: "0 0 7px #fff, 0 0 9px #fff",
                },
              }}
            >
              Kids App
            </Typography>
          </Box>

          {hasNameAndId && (
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <StyledButton onClick={() => navigate("/multiplication")}>
                Multiplication
              </StyledButton>
            </Box>
          )}
          {hasNameAndId && (
            <AccountMenu
              userName={currentUser.userName}
              handleLogout={handleLogout}
              handleProfile={() => navigate(`${currentUser.id}/profile`)}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

const StyledButton = styled.button`
  font-family: "Oswald";
  border: none;
  font-size: 1.2rem;
  color: #fff;
  background-color: transparent;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    text-shadow: 0 0 7px #fff, 0 0 9px #fff;
  }
`;
