import { Box, Paper, Typography } from "@mui/material";

function StatCard({ stat, value }) {
  return (
    <Paper variant="outlined">
      <Box
        padding={2}
        sx={{
          width: 200,
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">{stat}</Typography>
        <Typography variant="h4" sx={{ margin: "auto" }}>
          {value}
        </Typography>
      </Box>
    </Paper>
  );
}

export default StatCard;
