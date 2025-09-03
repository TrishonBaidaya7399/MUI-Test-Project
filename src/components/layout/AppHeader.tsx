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
const collapsedDrawerWidth = 76;

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
        backgroundColor: "var(--background-2)",
        borderBottom: "none",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", py: "22px" }}
        className="app-container"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "32px",
              width: "32px",
              borderRadius: "8px",
              border: "2px solid var(--white-3)",
              mr: 2,
            }}
          >
            <Image
              width={32}
              height={32}
              alt="brand name"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
              color: "var(--white)",
              fontSize: "1.1rem",
              display: { lg: "block", xs: "none" },
            }}
          >
            BRAND NAME
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "var(--white)",
              textTransform: "none",
              borderRadius: 1,
              border: "2px solid var(--white-3)",
              px: 3,
              backgroundColor: "var(--background-3)",
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
              backgroundColor: "var(--white)",
              color: "var(--text-black)",
              textTransform: "none",
              borderRadius: 1,
              px: 3,
              "&:hover": {
                backgroundColor: "var(--tertiary)",
              },
            }}
          >
            Register
          </Button>
          {isMobile && (
            <Box sx={{ mr: 2 }}>
              <AnimatedHamburger
                isOpen={mobileOpen}
                onClick={toggleMobileOpen}
                color="var(--white)"
                size={24}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
