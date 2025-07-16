import { useState, useEffect } from "react";
import { Grid, Paper, Box, Button, Stack } from "@mui/material";
import StatCard from "./StatCard";
import PlatformSelect from "./PlatformSelect";
import SearchBox from "./SearchBox";
import Pagination from "@mui/material/Pagination";
import GiveawayTable from "./GiveawayTable";

export default function Dashboard() {
  const [giveaways, setGiveaways] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchGiveaways = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?" +
            encodeURIComponent("https://www.gamerpower.com/api/giveaways")
        );

        const data = await response.json();
        setGiveaways(data);
      } catch (error) {
        console.error("Failed to fetch giveaways:", error);
      }
    };

    fetchGiveaways();
  }, []);

  const totalPages = Math.ceil(giveaways.length / itemsPerPage);
  const currentItems = giveaways.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      {/* Stat Cards */}
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Total value" value="$1,000" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Giveaways Count" value="65" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Top Prize" value="$120" />
        </Grid>
      </Grid>

      {/* Filters and Table */}
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <SearchBox />
          <PlatformSelect />
          <Button variant="contained">Find Giveaways</Button>
        </Stack>

        <GiveawayTable giveaways={currentItems} />

        {totalPages > 1 && (
          <Stack alignItems="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
