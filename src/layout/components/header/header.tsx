import { memo } from "react";

import { AppBar, Box, Toolbar } from "@mui/material";

import { Logo } from "@/layout/components";

export const Header = memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
});

export default Header;
