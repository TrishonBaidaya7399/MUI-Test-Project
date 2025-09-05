import { Box, LinearProgress, Avatar, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const userData = {
  username: "Test User",
  vipProgress: 50.0,
  currentLevel: "None",
  nextLevel: "Bronze",
  progress: 70,
};

export default function UserInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        width: {xl: '33%', lg: '33%', xs: '100%'},
      }}
    >
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Typography sx={{ marginBottom: "32px" }} variant="h4" component="div">
          {userData?.username}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            marginBottom: "25px",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textWrap: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Your VIP Progress
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon="oui:sort-right" style={{ fontSize: 16 }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography
              variant="body2"
              sx={{ display: "flex", flexDirection: "row", gap: 1 }}
            >
              {userData?.progress}%{" "}
              <Icon
                color="var(--bg-gray)"
                icon="material-symbols:info-rounded"
                style={{ fontSize: 16, color: "var(--bg-gray)" }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
      <LinearProgress
        variant="determinate"
        value={userData?.progress}
        sx={{
          width: "100%",
          height: "12px",
          marginBottom: "25px",
          borderRadius: 4,
          "& .MuiLinearProgress-bar": {
            background:
              "linear-gradient(to right, var(--yellow-light), var(--yellow))",
          },
          "&.MuiLinearProgress-root": {
            background: "var(--background-2)",
          },
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "100%",
          gap: 1,
          mt: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <StarBorderIcon fontSize={"small"} />
          <Typography variant="body2">{userData.currentLevel}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Icon icon="oui:sort-right" style={{ fontSize: 16 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            justifyContent: "end",
          }}
        >
          <StarIcon sx={{ color: "var(--yellow)" }} fontSize={"small"} />
          <Typography variant="body2">{userData.nextLevel}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
