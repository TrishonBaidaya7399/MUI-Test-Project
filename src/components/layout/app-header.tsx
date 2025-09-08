"use client";
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react";
import AnimatedHamburger from "../ui/animated-hamburger";
import { useSidebarStore } from "@/store/sidebar-store";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "@mui/material/styles";

export default function AppHeader() {
  const theme = useTheme();
  const drawerWidth = 240;
  const collapsedDrawerWidth = 76;
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { mobileOpen, collapsed, hovered, toggleMobileOpen } =
    useSidebarStore();

  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${currentDrawerWidth}px)`, xs: "100%" },
        ml: { lg: `${currentDrawerWidth}px` },
        zIndex: theme.zIndex.drawer - 1,
        bgcolor: theme.palette.background.bgLight,
        borderBottom: "none",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", py: theme.spacing(2) }}
        className="app-container"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: theme.spacing(4),
              width: theme.spacing(4),
              borderRadius: theme.spacing(1),
              // border: `${theme.spacing(0.25)} solid ${theme.palette.primary.contrastText}`,
              mr: theme.spacing(2),
            }}
          >
            <Image
              width={32}
              height={32}
              alt="brand name"
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
              color: theme.palette.primary.contrastText,
              fontSize: theme.spacing(2.2),
              display: { lg: "block", xs: "none" },
            }}
          >
            BRAND NAME
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: theme.spacing(2) }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: theme.palette.primary.contrastText,
              textTransform: "none",
              borderRadius: theme.spacing(1),
              border: `${theme.spacing(0.25)} solid ${
                theme.palette.primary.contrastText
              }`,
              px: theme.spacing(3),
              bgcolor: theme.palette.background.black,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: theme.palette.primary.contrastText,
              color: theme.palette.background.black,
              textTransform: "none",
              borderRadius: theme.spacing(1),
              px: theme.spacing(3),
              "&:hover": {
                bgcolor: theme.palette.primary.contrastText,
              },
            }}
          >
            Register
          </Button>
          {isMobile && (
            <Box sx={{ mr: theme.spacing(2) }}>
              <AnimatedHamburger
                isOpen={mobileOpen}
                onClick={toggleMobileOpen}
                color={theme.palette.primary.contrastText}
                size={24}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
