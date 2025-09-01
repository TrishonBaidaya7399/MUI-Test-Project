"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import AnimatedHamburger from "../ui/AnimatedHamburger";
import { useSidebarStore } from "@/store/sidebarStore";
import Image from "next/image";

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

export default function AppHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { mobileOpen, collapsed, hovered, toggleMobileOpen } =
    useSidebarStore();

  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${currentDrawerWidth}px)` },
        ml: { lg: `${currentDrawerWidth}px` },
        zIndex: theme.zIndex.drawer - 1,
        backgroundColor: "#2a2a2a",
        borderBottom: "none",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", minHeight: "64px" }}
        className="app-container"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <Box sx={{ mr: 2 }}>
              <AnimatedHamburger
                isOpen={mobileOpen}
                onClick={toggleMobileOpen}
                color="#ffffff"
                size={24}
              />
            </Box>
          )}
          <Box
            sx={{
              height: "32px",
              width: "32px",
              borderRadius: "8px",
              border: "2px solid #fff",
              mr: 2,
            }}
          >
            <Image
              width={32}
              height={32}
              alt="brand name"
              style={{ objectFit: "cover", width: '100%', height: '100%' }}
              src="/default.avif"
              placeholder="blur"
              blurDataURL="/default.webp"
              loading="lazy"
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              fontSize: "1.1rem",
            }}
          >
            BRAND NAME
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#ffffff",
              textTransform: "none",
              borderRadius: 1,
              border: '2px solid var(--border)',
              px: 3,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ffffff", // White background
              color: "#2a2a2a", // Dark text
              textTransform: "none",
              borderRadius: 1,
              px: 3,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
