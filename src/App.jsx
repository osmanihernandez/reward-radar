import { Grid } from "@mui/material";
import "./App.css";
import Naviagation from "./components/Naviagation";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item size={3}>
          <Naviagation />
        </Grid>
        <Grid item size={9}>
          <Dashboard />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
