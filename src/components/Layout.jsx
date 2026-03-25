import { Box, Grid, Paper } from "@mui/material";
import Naviagation from "./Naviagation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box padding={5}>
      <Grid container spacing={4}>
        <Grid item size={3}>
          <Paper variant="outlined" sx={{ height: "100%", minHeight: "90vh" }}>
            <Naviagation />
          </Paper>
        </Grid>
        <Grid item size={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
