import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

function AppLink({ to, state, children }) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      state={state}
      underline="none"
      color="text.primary"
    >
      {children}
    </MuiLink>
  );
}

export default AppLink;
