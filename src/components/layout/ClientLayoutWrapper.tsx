"use client";
import type React from "react";
import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useSidebarStore } from "@/store/sidebarStore";

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { collapsed, hovered } = useSidebarStore();

  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh"}}>
      <AppHeader />
      <AppSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%',lg: `calc(100% - ${currentDrawerWidth}px)` },
          backgroundColor: "var(--background)",
          minHeight: "100vh",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar />
        <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>
      </Box>
    </Box>
  );
}
