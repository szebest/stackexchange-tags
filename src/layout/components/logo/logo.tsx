import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

export function Logo() {
  return (
    <Link to="/" role="link">
      <Typography variant="h6" component="div">
        Stackexchange tags
      </Typography>
    </Link>
  );
}

export default Logo;
