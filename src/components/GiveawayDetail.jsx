import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function GiveawayDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [giveaway, setGiveaway] = useState(null);

  useEffect(() => {
    const fetchGiveaway = async () => {
      if (location.state?.giveaway) {
        setGiveaway(location.state.giveaway);
      } else {
        try {
          const res = await fetch(
            `https://www.gamerpower.com/api/giveaway?id=${id}`,
          );
          const data = await res.json();
          setGiveaway(data);
        } catch (err) {
          console.error("Failed to fetch giveaway", err);
        }
      }
    };

    fetchGiveaway();
  }, [id, location.state]);

  if (!giveaway) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ maxWidth: 800, mx: "auto", my: 4, p: 2 }}>
      <CardMedia
        component="img"
        image={giveaway.thumbnail}
        alt={giveaway.title}
        sx={{ height: 300, objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {giveaway.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {giveaway.description}
        </Typography>
        <Typography variant="subtitle1">
          Worth: <strong>{giveaway.worth}</strong>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Platforms: {giveaway.platforms}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          size="small"
          href={giveaway.open_giveaway_url}
          target="_blank"
        >
          Visit Giveaway
        </Button>
        <Button
          variant="contained"
          size="small"
          href={giveaway.instructions || "#"}
          target="_blank"
        >
          View Instructions
        </Button>
      </CardActions>
    </Card>
  );
}

export default GiveawayDetail;
