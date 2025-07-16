import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  return (
    <Box sx={{ width: 300 }}>
      <TextField
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
