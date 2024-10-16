import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">React.js 2 Hands-on</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
