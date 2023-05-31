import { Toolbar, Typography } from "@mui/material";

export const EnhancedTableToolbar = ({ bestScore }: { bestScore: number }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        textAlign: "left",
      }}
    >
      <Typography
        sx={{
          flex: "1 1 100%",
          fontFamily: "Oswald",
          fontWeight: "bold",
          color: "#B53471",
        }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Your highest score is {bestScore}
      </Typography>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
