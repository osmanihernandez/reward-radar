import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  Typography,
  Chip,
} from "@mui/material";

export default function GiveawayTable({ giveaways }) {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Snapshot</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Worth</TableCell>
            <TableCell>Platforms</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {giveaways.map((g) => (
            <TableRow key={g.id}>
              <TableCell>
                <Avatar
                  src={g.thumbnail}
                  alt={g.title}
                  variant="rounded"
                  sx={{ width: 56, height: 32 }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="body2">{g.title}</Typography>
              </TableCell>
              <TableCell>{g.worth}</TableCell>
              <TableCell>{g.platforms}</TableCell>
              <TableCell>
                <Chip
                  label={g.type}
                  color="secondary" // Use a single color here
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  size="small"
                  href={g.open_giveaway_url}
                  target="_blank"
                >
                  Visit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
