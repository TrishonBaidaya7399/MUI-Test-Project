"use client"
import type React from "react"
import { useState } from "react"
import { Box, Toolbar, useTheme } from "@mui/material"
import AppHeader from "./AppHeader"
import AppSidebar from "./AppSidebar"

const drawerWidth = 240

interface ClientLayoutWrapperProps {
  children: React.ReactNode
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppHeader onMenuClick={handleDrawerToggle} mobileOpen={mobileOpen} />

      <AppSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Box sx={{ p: { xs: 2, sm: 3 } }}>{children}</Box>
      </Box>
    </Box>
  )
}
