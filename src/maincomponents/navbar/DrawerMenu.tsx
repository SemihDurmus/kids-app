import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {menuItems.map((el, index) => (
          <ListItem key={el.text} disablePadding>
            <ListItemButton onClick={el.onClick}>
              <ListItemText primary={el.text} />
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
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {listMenuItems()}
      </Drawer>
    </div>
  );
}
