import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import Image from "next/image";

interface GameCardProps {
  rank: number;
  title: string;
  image: string;
  players: number;
}

export default function GameCard({
  rank,
  title,
  image,
  players,
}: GameCardProps) {
  return (
    <Card
      sx={{
        width: { xs: 140, sm: 160, md: 180 },
        background: "transparent",
        boxShadow: "none",
        position: "relative",
        border: "none",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia>
          <Image
            src={image}
            alt={title}
            width={180}
            height={240}
            style={{ borderRadius: 8, objectFit: "cover" }}
            sizes="(max-width: 600px) 140px, (max-width: 900px) 160px, 180px"
          />
        </CardMedia>
        <Chip
          label={rank}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            bgcolor: "#000000",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "50%",
          }}
        />
      </Box>

      <CardContent sx={{ p: 1, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
          }}
        >
          <Box
            sx={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              background: "green",
            }}
          ></Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "0.75rem",
            }}
          >
            {`${players} playing`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
