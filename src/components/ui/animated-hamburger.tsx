"use client";
import { Box } from "@mui/material";
import { Icon } from "@iconify/react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  size?: number;
}

export default function AnimatedHamburger({
  isOpen,
  onClick,
  color = "var(--white-2)",
  size = 24,
}: AnimatedHamburgerProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0px !important",
        width: 'fit-content',
        height: 'fit-content' ,
        display: "flex",
        borderRadius: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: 'var(--background1)',
        },
      }}
      // whileTap={{ scale: 0.95 }}
    >
      {isOpen ? (
       <CloseIcon fontSize="large"/>
      ) : (
       <MenuIcon fontSize='large'/>
      )}
    </Box>
  );
}
