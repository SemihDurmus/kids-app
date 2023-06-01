import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { IconButton, ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export default function DrawerMenu() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { text: "Multiplication", onClick: () => navigate("/multiplication") },
  ];

  const listMenuItems = () => (
    <Box
      sx={{ width: 200, backgroundColor: "#2c3e50" }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            disableTypography={true}
            sx={{
              fontFamily: "Short stack",
              color: "#efefef",
              pb: 2,
              borderBottom: "1px solid white",
            }}
            primary={"Menu"}
          />
        </ListItemButton>
      </ListItem>
      <List>
        {menuItems.map((el, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={el.onClick}>
              <ListItemText
                disableTypography={true}
                sx={{ fontFamily: "Short stack", color: "#2ecc71" }}
                primary={el.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
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
        onClick={() => setOpen(true)}
      >
        <MenuIcon sx={{ color: "#ffc312" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(149, 165, 165, 0.8)",
          },
        }}
      >
        {listMenuItems()}
      </Drawer>
    </div>
  );
}
