import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const NavBar = () => {
  const userName = "Semih";
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Title variant="h6" sx={{ flexGrow: 1 }}>
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
            <Box>
              <button onClick={() => navigate("/")}>Home</button>
              <button onClick={() => navigate("/multiplication")}>
                Multiplication
              </button>
              <button onClick={() => navigate("/points")}>Points</button>
            </Box>
            <Chip
              avatar={
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
              }
              label={userName}
            />
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
