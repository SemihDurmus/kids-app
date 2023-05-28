import { useContext } from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Chip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const hasNameAndId = currentUser.id && currentUser.userName;
  return (
    <Box sx={{ flexGrow: 1, height: "4rem", backgroundColor: "#6F1E51" }}>
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
                color: "#ffc312",
                "&:hover": {
                  color: "#FFC312",
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
              <div>
                <Chip
                  onClick={() => navigate(`${currentUser.id}/profile`)}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#ffc312",
                    fontFamily: "Short stack",
                    "&:hover": {
                      color: "#FFC",
                      backgroundColor: "#F79F1F",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  label={currentUser.userName}
                  avatar={
                    <Avatar
                      alt={currentUser.userName}
                      src="/static/images/avatar/1.jpg"
                    />
                  }
                />
                <Chip
                  onClick={() => {
                    setCurrentUser && setCurrentUser({ id: "", userName: "" });
                    navigate("/");
                  }}
                  sx={{
                    fontWeight: "bold",
                    ml: 2,
                    fontFamily: "Short stack",
                    backgroundColor: "#ED4C67",
                    "&:hover": {
                      color: "#FFC",
                      backgroundColor: "#F79F1F",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  label="Log out"
                />
              </div>
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
  color: #ffc312;
`;
