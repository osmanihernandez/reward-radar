import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ value, onChange }) {
  return (
    <Box sx={{ width: 300 }}>
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search giveaways..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBox;
