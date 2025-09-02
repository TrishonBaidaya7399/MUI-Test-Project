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
  category: string; // Added category prop to match the design
}

export default function GameCard({
  rank,
  title,
  image,
  players,
  category,
}: GameCardProps) {
  return (
    <Card
      sx={{
        minWidth: "144px", 
        height: "212px",
        background: "transparent",
        boxShadow: "none",
        position: "relative",
        border: "none",
        overflow: "hidden", 
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "188px" }}>
        <CardMedia sx={{ width: "100%", height: "100%" }}>
          <Image
            src={image}
            alt={title}
            width={144}
            height={188}
            loading="lazy"
            style={{
              borderRadius: 8,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            sizes="(max-width: 600px) 140px, (max-width: 900px) 190px, 144px"
          />
        </CardMedia>
        <Chip
          label={rank}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            bgcolor: "var(--background-dark)", // Dark background to match design
            color: "var(--white)",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            fontSize: "12px",
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            p: 0
          }}
        />
      </Box>
      <CardContent sx={{ p: 1, pl: 0, textAlign: "center", pt: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
            marginTop: "8px",
            paddingLeft: "4px",
          }}
        >
          <Box
            sx={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              background: "var(--green)",
            }}
          ></Box>
          <Typography
            sx={{
              color: "var(--white)",
              fontSize: "12px",
            }}
          >
            {`${players}`}
          </Typography>
          <Typography
            sx={{
              color: "var(--text-gray)",
              fontSize: "12px",
            }}
          >
            {`playing`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
