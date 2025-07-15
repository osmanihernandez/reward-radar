import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <Box sx={{ height: "100vh", p: 2 }}>
      <Grid container direction="column" spacing={2} sx={{ height: "100%" }}>
        <Grid item sx={{ flexGrow: 2 }}>
          <Grid container gap={2} justifyContent={"space-around"}>
            <Grid item sx={4}>
              <StatCard stat="Total value" value="$1,000" />
            </Grid>
            <Grid item sx={4}>
              <StatCard stat="Giveaways Counts" value="65" />
            </Grid>
            <Grid item sx={4}>
              <StatCard stat="Top Prize" value="$120" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ flexGrow: 8 }}>
          <Paper sx={{ p: 2, textAlign: "center", height: "100%" }}>
            Row 2 (30%)
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
