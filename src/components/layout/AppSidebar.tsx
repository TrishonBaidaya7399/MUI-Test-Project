"use client"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { Icon } from "@iconify/react"

const drawerWidth = 240

interface MenuItem {
  text: string
  icon: string
  href?: string
}

const menuItems: MenuItem[] = [
  { text: "Promotions", icon: "mdi:gift-outline" },
  { text: "Affiliate", icon: "mdi:account-group-outline" },
  { text: "VIP Club", icon: "mdi:crown-outline" },
  { text: "Blog", icon: "mdi:post-outline" },
  { text: "Forum", icon: "mdi:forum-outline" },
  { text: "Sportsbook/Casino", icon: "mdi:dice-multiple-outline" },
  { text: "Responsible Gambling", icon: "mdi:shield-check-outline" },
  { text: "Live Support", icon: "mdi:headset" },
]

interface AppSidebarProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

export default function AppSidebar({ mobileOpen, onMobileClose }: AppSidebarProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 2, pt: 3 }}>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
          Test User
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
          Your VIP Progress
        </Typography>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            50,000
          </Typography>
          <Icon icon="mdi:diamond" style={{ color: theme.palette.primary.main }} />
        </Box>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      <List sx={{ flexGrow: 1, py: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                mx: 1,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon
                  icon={item.icon}
                  style={{
                    fontSize: 20,
                    color: theme.palette.text.secondary,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  color: theme.palette.text.primary,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
          Language: English
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
