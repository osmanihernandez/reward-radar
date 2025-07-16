import { useState, useEffect } from "react";
import { Grid, Box, Button, Stack } from "@mui/material";
import StatCard from "./StatCard";
import PlatformSelect from "./PlatformSelect";
import SearchBox from "./SearchBox";
import Pagination from "@mui/material/Pagination";
import GiveawayTable from "./GiveawayTable";
import TypeSelect from "./TypeSelect";

export default function Dashboard() {
  const [giveaways, setGiveaways] = useState([]);
  const [filteredGiveaways, setFilteredGiveaways] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const [totalValue, setTotalValue] = useState(0);
  const [giveawayCount, setGiveawayCount] = useState(0);
  const [topPrize, setTopPrize] = useState(0);

  // Query API
  const fetchGiveaways = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (selectedPlatform) queryParams.append("platform", selectedPlatform);
      if (selectedType) queryParams.append("type", selectedType);

      const url =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.gamerpower.com/api/giveaways?${queryParams.toString()}`
        );

      const response = await fetch(url);
      const data = await response.json();

      if (!Array.isArray(data)) throw new Error("Invalid response format");

      setGiveaways(data);
      setPage(1);
    } catch (error) {
      console.error("Failed to fetch giveaways:", error);
      setGiveaways([]);
    }
  };

  // Fetch all giveaways on mount
  useEffect(() => {
    fetchGiveaways();
  }, []);

  // Update stats based on selected platfrom
  useEffect(() => {
    if (giveaways.length === 0) {
      setTotalValue(0);
      setGiveawayCount(0);
      setTopPrize(0);
      return;
    }

    const values = giveaways.map((g) => {
      const match = g.worth?.match(/\$([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    });

    const total = values.reduce((sum, val) => sum + val, 0);
    const top = Math.max(...values);

    setTotalValue(total);
    setGiveawayCount(giveaways.length);
    setTopPrize(top);
  }, [giveaways]);

  // Search by title
  useEffect(() => {
    if (searchQuery) {
      const filtered = giveaways.filter((giveaway) =>
        giveaway.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      setFilteredGiveaways(filtered);
    } else {
      setFilteredGiveaways(giveaways);
    }
  }, [searchQuery, giveaways]);

  // Pagination
  const totalPages = Math.ceil(filteredGiveaways.length / itemsPerPage);
  const currentItems = filteredGiveaways.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      {/* Stat Cards */}
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Total value" value={`$${totalValue.toFixed(2)}`} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Giveaways Count" value={giveawayCount} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Top Prize" value={`$${topPrize.toFixed(2)}`} />
        </Grid>
      </Grid>

      {/* Filters and Table */}
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <SearchBox value={searchQuery} onChange={setSearchQuery} />
          <PlatformSelect
            value={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />
          <TypeSelect value={selectedType} onChange={setSelectedType} />
          <Button variant="contained" onClick={fetchGiveaways}>
            Find Giveaways
          </Button>
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
