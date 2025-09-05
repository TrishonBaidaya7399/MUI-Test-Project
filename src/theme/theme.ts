"use client";
import { createTheme } from "@mui/material/styles";
import tokens from "../../public/tokens.json";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tokens.colors.primaryMain,
      light: tokens.colors.primaryLight,
      dark: tokens.colors.primaryDark,
      contrastText: tokens.colors.primaryContrastText,
    },
    secondary: {
      main: tokens.colors.secondaryMain,
      light: tokens.colors.secondaryLight,
      dark: tokens.colors.secondaryDark,
      contrastText: tokens.colors.secondaryContrastText,
    },
    background: {
      default: tokens.colors.backgroundDefault,
      paper: tokens.colors.backgroundPaper,
    },
    text: {
      primary: tokens.colors.textPrimary,
      secondary: tokens.colors.textSecondary,
    },
    divider: tokens.colors.divider,
    success: {
      main: tokens.colors.successMain,
    },
    warning: {
      main: tokens.colors.warningMain,
    },
    error: {
      main: tokens.colors.errorMain,
    },
  },
  typography: {
    fontFamily: tokens.typography.fontFamily,
    h1: tokens.typography.h1,
    h2: tokens.typography.h2,
    h3: tokens.typography.h3,
    h4: tokens.typography.h4,
    h5: tokens.typography.h5,
    h6: tokens.typography.h6,
    body1: tokens.typography.body1,
    body2: tokens.typography.body2,
  },
  spacing: tokens.spacing.base, 
  shape: {
    borderRadius: tokens.shape.borderRadius,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${tokens.colors.divider} ${tokens.colors.backgroundDefault}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: tokens.shape.borderRadius,
            backgroundColor: tokens.colors.divider,
            minHeight: 24,
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            backgroundColor: tokens.colors.backgroundDefault,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.components.appBarBackground,
          borderBottom: `1px solid ${tokens.colors.divider}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: tokens.components.drawerBackground,
          borderRight: `1px solid ${tokens.colors.divider}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: tokens.shape.borderRadius,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.components.cardBackground,
          border: `1px solid ${tokens.colors.divider}`,
        },
      },
    },
  },
});
