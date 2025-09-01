"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;

interface AppHeaderProps {
  onMenuClick: () => void;
  mobileOpen: boolean;
}

export default function AppHeader({ onMenuClick, mobileOpen }: AppHeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }} className="app-container">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onMenuClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            BRAND NAME
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              "&:hover": {
                borderColor: theme.palette.primary.main,
                backgroundColor: "transparent",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
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
