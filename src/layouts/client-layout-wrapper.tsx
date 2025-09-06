import type React from "react";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import AppHeader from "../components/layout/app-header";
import AppSidebar from "../components/layout/app-sidebar";
import { useSidebarStore } from "@/store/sidebar-store";
import { theme } from "@/theme/theme";

const drawerWidth = 30;
const collapsedDrawerWidth = 8;

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { collapsed, hovered } = useSidebarStore();

  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppHeader />
      <AppSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", lg: `calc(100% - ${currentDrawerWidth})` },
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar />
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
