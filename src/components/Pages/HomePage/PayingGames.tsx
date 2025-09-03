import { Box, Typography } from "@mui/material";
import Image from "next/image";

const payingGames = [
  {
    title: "Casino",
    imageUrl: "/currentGameImages/image 60.avif",
    blurUrl: "/currentGameImages/image 60.webp",
    players: 348,
  },
  {
    title: "Sports",
    imageUrl: "/currentGameImages/image 61.avif",
    blurUrl: "/currentGameImages/image 61.webp",
    players: 348,
  },
];

export default function PayingGames() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: '16px', lg: '60px' },
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
      }}
    >
      {payingGames.map((game, index) => (
        <Box
          key={game.title}
          sx={{
            width: { xs: "100%", lg: "48%" },
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <Image
            src={game.imageUrl}
            alt={`${game.title} card`}
            width={400}
            placeholder="blur"
            blurDataURL={game?.blurUrl}
            height={250}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority={index === 0}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
          <Box
            sx={{
              color: "var(--white)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              background: "transparent",
            }}
          >
            <Typography variant="h6" component="div">
              {game.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                  color: "var(--white)",
                  fontSize: "0.75rem",
                }}
              >
                {`${game.players} playing`}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
