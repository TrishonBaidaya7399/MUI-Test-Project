"use client"
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
const PayingGames = dynamic(
  () => import("@/sections/home/components/playing-games/paying-games")
);
const UserInfo = dynamic(
  () => import("@/sections/home/components/user-info/user-info")
);

import { useTheme } from "@mui/material/styles";

function HomePageBanner() {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          color: theme.palette.primary.contrastText,
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: { lg: "space-between", xs: "start" },
          alignItems: { lg: "center", xs: "start" },
          gap: { xl: theme.spacing(7.5), lg: theme.spacing(2), xs: theme.spacing(2) },
          marginTop: { lg: theme.spacing(4.5), xs: theme.spacing(4.5) },
          marginBottom: { lg: theme.spacing(4.5), xs: theme.spacing(2) },
        }}
        className="app-container"
      >
        <UserInfo />
        <PayingGames />
      </Box>
    </div>
  );
}

export default HomePageBanner;
