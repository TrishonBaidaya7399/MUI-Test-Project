"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import AnimatedHamburger from "../ui/animated-hamburger";
import { useSidebarStore } from "@/store/sidebar-store";
import Image from "next/image";
import { theme } from "@/theme/theme";

  const drawerWidth = theme.spacing(30);
  const collapsedDrawerWidth = theme.spacing(9.5);

export default function AppHeader() {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { mobileOpen, collapsed, hovered, toggleMobileOpen } = useSidebarStore();
  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;
    
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${currentDrawerWidth}px)`, xs: "100%" },

        ml: { lg: `${currentDrawerWidth}px` },
        zIndex: theme.zIndex.drawer - 1,
        backgroundColor: theme.palette.background.paper,
        borderBottom: "none",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
     <Toolbar sx={{ justifyContent: "space-between", py: theme.spacing(2) }} className="app-container">

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: theme.spacing(4),
              width: theme.spacing(4),
              borderRadius: theme.shape.borderRadius,
              border: `2px solid ${theme.palette.text.secondary}`,
              mr: theme.spacing(2),
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
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.common.white,
            fontSize: theme.typography.h6.fontSize,
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
              color: theme.palette.common.white,
              textTransform: "none",
              borderRadius: theme.shape.borderRadius,
              border: `2px solid ${theme.palette.text.secondary}`,
              px: theme.spacing(3),
              backgroundColor: theme.palette.background.default,
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
              backgroundColor: theme.palette.common.white,
              color: theme.palette.text.primary,
              textTransform: "none",
              borderRadius: theme.shape.borderRadius,
              px: theme.spacing(3),
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
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
                color={theme.palette.common.white}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
