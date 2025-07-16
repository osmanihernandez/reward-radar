import { Box, Grid, Paper } from "@mui/material";
import Naviagation from "./components/Naviagation";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Box padding={5}>
      <Grid container spacing={4}>
        <Grid item size={3}>
          <Paper variant="outlined" sx={{ height: "100%" }}>
            <Naviagation />
          </Paper>
        </Grid>
        <Grid item size={9}>
          <Dashboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
