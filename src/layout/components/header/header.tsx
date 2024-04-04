import { memo } from "react";

import { AppBar, Toolbar } from "@mui/material";

import { Logo } from "@/layout/components";

export const Header = memo(() => {
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
});

export default Header;
