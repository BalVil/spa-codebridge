import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Link } from "@mui/material";

const NotFound = () => {
  return (
    <Typography>
      <h1>Oops! You seem to be lost.</h1>
      <p>Please follow the link below:</p>
      <Link component={NavLink} to={`/`} underline="hover" color="inherit">
        Home
      </Link>
    </Typography>
  );
};

export default NotFound;
