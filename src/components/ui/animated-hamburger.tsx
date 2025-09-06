"use client";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "@/theme/theme";
interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

export default function AnimatedHamburger({
  isOpen,
  onClick,
  color = theme.palette.common.white,
}: AnimatedHamburgerProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: theme.spacing(0),
        width: "fit-content",
        height: "fit-content",
        display: "flex",
        borderRadius: theme.shape.borderRadius,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }}
      // whileTap={{ scale: 0.95 }}
    >
      {isOpen ? (
        <CloseIcon fontSize="large" sx={{ color }} />
      ) : (
        <MenuIcon fontSize="large" sx={{ color }} />
      )}
    </Box>
  );
}
