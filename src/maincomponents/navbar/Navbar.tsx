import { useContext } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../context/userContext";

export const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const hasNameAndId = currentUser.id && currentUser.name;
  return (
    <Box sx={{ flexGrow: 1, height: "8vh" }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{
                "&:hover": {
                  color: "red",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </IconButton>
          <Title
            variant="h6"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Kids App{" "}
          </Title>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50rem",
            }}
          >
            {hasNameAndId && (
              <Box>
                <button onClick={() => navigate("/multiplication")}>
                  Multiplication
                </button>
              </Box>
            )}
            {hasNameAndId && (
              <Chip
                onClick={() => navigate(`${currentUser.id}/profile`)}
                label={currentUser.name}
                avatar={
                  <Avatar
                    alt={currentUser.name}
                    src="/static/images/avatar/1.jpg"
                  />
                }
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

const Title = styled(Typography)`
  font-family: "Oswald";
`;
