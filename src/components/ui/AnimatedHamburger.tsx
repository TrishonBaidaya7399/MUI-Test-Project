"use client";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { Icon } from "@iconify/react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  size?: number;
}

export default function AnimatedHamburger({
  isOpen,
  onClick,
  color = "rgba(255, 255, 255, 0.55)",
  size = 24,
}: AnimatedHamburgerProps) {
  return (
    <Box
      component={motion.button}
      onClick={onClick}
      sx={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        width: size,
        height: size,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {isOpen ? (
        <Icon
          icon="ei:close"
          style={{
            fontSize: 50,
            color: `${color}`,
          }}
        />
      ) : (
        <Icon
          icon="ei:navicon"
          style={{
            fontSize: 50,
            color: `${color}`,
          }}
        />
      )}
    </Box>
  );
}
