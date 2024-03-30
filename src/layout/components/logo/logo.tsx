import { Link, useSearchParams } from "react-router-dom";

import { Typography } from "@mui/material";

export function Logo() {
  const [searchParams] = useSearchParams();

  return (
    <Link to={{ pathname: "/", search: searchParams.toString() }} role="link">
      <Typography variant="h6" component="div">
        Stackexchange tags
      </Typography>
    </Link>
  );
}

export default Logo;
