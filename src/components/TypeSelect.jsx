import {
  Stack,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const types = ["all", "game", "loot", "beta"];

function TypeSelect({ value, onChange }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="body2" fontWeight="bold">
        Type
      </Typography>
      <RadioGroup
        row
        name="giveaway-type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {types.map((type) => (
          <FormControlLabel
            key={type}
            value={type === "all" ? "" : type}
            control={<Radio size="small" />}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
}

export default TypeSelect;
