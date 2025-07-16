import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import platforms from "../data/platforms.json";

function PlatformSelect({ value, setSelectedPlatform }) {
  const handleChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="platform-select-label">Platform</InputLabel>
        <Select
          labelId="platform-select-label"
          id="platform-select"
          value={value}
          label="Platform"
          onChange={handleChange}
        >
          <MenuItem key="all" value="all">
            all
          </MenuItem>
          {platforms.map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PlatformSelect;
