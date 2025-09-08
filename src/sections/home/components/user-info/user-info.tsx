import { Box, LinearProgress, Avatar, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useTheme } from "@mui/material/styles";

const userData = {
  username: "Test User",
  vipProgress: 50.0,
  currentLevel: "None",
  nextLevel: "Bronze",
  progress: 70,
};

export default function UserInfo() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        width: { xl: "33%", lg: "33%", xs: "100%" },
      }}
    >
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Typography
          sx={{ marginBottom: theme.spacing(4) }}
          variant="h4"
          component="div"
        >
          {userData?.username}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: theme.spacing(2),
            marginBottom: theme.spacing(3.125),
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textWrap: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(1.5),
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
            <Icon
              icon="oui:sort-right"
              style={{ fontSize: theme.spacing(2) }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(1),
              }}
            >
              {userData?.progress}%{" "}
              <Icon
                color={theme.palette.primary.contrastText}
                icon="material-symbols:info-rounded"
                style={{
                  fontSize: theme.spacing(2),
                  color: theme.palette.primary.contrastText,
                }}
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
          height: theme.spacing(1.5),
          marginBottom: theme.spacing(3.125),
          borderRadius: theme.spacing(0.5),
          "& .MuiLinearProgress-bar": {
            background: theme.palette.gradients.linearYellow,
          },
          "&.MuiLinearProgress-root": {
            background: theme.palette.background.bgSideBar,
          },
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "100%",
          gap: theme.spacing(1),
          mt: theme.spacing(0.5),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing(1),
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
          <Icon icon="oui:sort-right" style={{ fontSize: theme.spacing(2) }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing(1),
            justifyContent: "end",
          }}
        >
          <StarIcon sx={{ color: theme.palette.primary.contrastText }} fontSize={"small"} />
          <Typography variant="body2">{userData.nextLevel}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
