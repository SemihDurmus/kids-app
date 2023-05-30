import { Toolbar, Typography } from "@mui/material";

export const EnhancedTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          flex: "1 1 100%",
          fontFamily: "Short stack",
          fontWeight: "bold",
          color: "#B53471",
        }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        Your scores
      </Typography>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
