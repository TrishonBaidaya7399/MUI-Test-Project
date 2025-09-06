import { createTheme, PaletteMode, Theme } from "@mui/material/styles";
import tokens from "./tokens.json";

export const theme = createTheme({
  palette: { ...tokens.palette, mode: tokens.palette.mode as PaletteMode },
  spacing: (factor: number) => tokens.spacing * factor, 
  shape: tokens.shape,
  typography: tokens.typography,
  shadows: [
    tokens.shadows[0] || "none",
    tokens.shadows[1] || "none",
    tokens.shadows[2] || "none",
    ...Array(22).fill("none"),
  ] as unknown as any,
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => ({
          borderRadius: theme.shape.borderRadius,
          textTransform: "none",
          paddingInline: 2, 
          paddingBlock: 1,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: Theme }) => ({
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },
  },
});
