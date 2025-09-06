"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { ReactNode, useState } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import AnimatedHamburger from "../ui/animated-hamburger";
import PromotionsSVG from "../common/svg_icons/PromotionsSVG";
import AffiliateSVG from "../common/svg_icons/AffiliateSVG";
import SponsorSVG from "../common/svg_icons/SponsorSVG";
import LockSVG from "../common/svg_icons/LockSVG";
import LiveSupportSVG from "../common/svg_icons/LiveSupportSVG";
import TrophySVG from "../common/svg_icons/TroffeeSVG";
import BlogSVG from "../common/svg_icons/BlogSVG";
import ForumSVG from "../common/svg_icons/ForumSVG";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "@/theme/theme";

const drawerWidth = 30;

interface MenuItem {
  text: string;
  icon: string | ReactNode;
  href?: string;
  children?: MenuItem[];
}

const menuItems1: MenuItem[] = [
  {
    text: "Promotions",
    icon: <PromotionsSVG />,
    children: [
      { text: "Welcome Bonus", icon: "mdi:star-outline" },
      { text: "Daily Rewards", icon: "mdi:calendar-outline" },
      { text: "VIP Rewards", icon: "mdi:crown-outline" },
    ],
  },
  { text: "Affiliate", icon: <AffiliateSVG /> },
  { text: "VIP Club", icon: <TrophySVG /> },
  { text: "Blog", icon: <BlogSVG /> },
  { text: "Forum", icon: <ForumSVG /> },
];
const menuItems2: MenuItem[] = [
  {
    text: "Sponsorships",
    icon: <SponsorSVG />,
    children: [
      { text: "Partner Program", icon: "mdi:handshake-outline" },
      { text: "Brand Deals", icon: "mdi:briefcase-outline" },
    ],
  },
  { text: "Responsible Gambling", icon: <LockSVG /> },
  { text: "Live Support", icon: <LiveSupportSVG /> },
];

export default function AppSidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const { mobileOpen, setMobileOpen } = useSidebarStore();

  const handleItemClick = (itemText: string) => {
    if (expandedItems.includes(itemText)) {
      setExpandedItems(expandedItems.filter((item) => item !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  const isExpanded = true; // Always expanded on desktop, mobile only when open
  const currentWidth = drawerWidth; // Fixed width, no collapse on desktop

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.common.white,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            width: "100%",
          }}
        >
          {isMobile ? (
            <AnimatedHamburger
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              color={theme.palette.common.white}
            />
          ) : (
            <MenuIcon fontSize="large" />
          )}

          {isExpanded && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.grey[100],
                  color: theme.palette.common.white,
                  textTransform: "none",
                  borderRadius: theme.shape.borderRadius,
                  fontSize: theme.typography.body2.fontSize,
                  fontWeight: theme.typography.fontWeightMedium,
                  minWidth: "auto",
                  height: 5.5,
                  px: 2,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.text.primary,
                  },
                }}
              >
                Casino
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.grey[100],
                  color: theme.palette.common.white,
                  textTransform: "none",
                  borderRadius: theme.shape.borderRadius,
                  fontSize: theme.typography.body2.fontSize,
                  fontWeight: theme.typography.fontWeightMedium,
                  minWidth: "auto",
                  height: 5.5,
                  px: 2,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.text.primary,
                  },
                }}
              >
                Sports
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: 2,
        }}
      >
        <List
          sx={{
            flexGrow: 1,
            p: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          {menuItems1.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: 1.25,
                    borderRadius: theme.shape.borderRadius,
                    minHeight: 6,
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      backgroundColor: theme.palette.grey[100],
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? 5 : "auto",
                      mr: isExpanded ? 1 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: theme.typography.body1.fontSize,
                          color: theme.palette.common.white,
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  {isExpanded && (
                    <>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: theme.typography.body2.fontSize,
                          color: theme.palette.common.white,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      />
                      {item.children && (
                        <Icon
                          icon={
                            expandedItems.includes(item.text)
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          style={{
                            fontSize: 2.5,
                            color: theme.palette.common.white,
                          }}
                        />
                      )}
                    </>
                  )}
                </ListItemButton>
              </ListItem>

              {item.children && isExpanded && (
                <Collapse
                  in={expandedItems.includes(item.text)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItem key={child.text} disablePadding>
                        <ListItemButton
                          sx={{
                            pl: 4,
                            mx: 1,
                            borderRadius: theme.shape.borderRadius,
                            "&:hover": {
                              backgroundColor: theme.palette.grey[100],
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: 2.5,
                                  color: theme.palette.common.white,
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: theme.typography.body2?.fontSize,
                              color: theme.palette.common.white,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
        <List
          sx={{
            flexGrow: 1,
            py: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          {menuItems2.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: 1.25,
                    borderRadius: theme.shape.borderRadius,
                    minHeight: 6,
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      backgroundColor: theme.palette.grey[100],
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? 5 : "auto",
                      mr: isExpanded ? 1 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: theme.typography.body1.fontSize,
                          color: theme.palette.common.white,
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  {isExpanded && (
                    <>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: theme.typography.body2.fontSize,
                          color: theme.palette.common.white,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      />
                      {item.children && (
                        <Icon
                          icon={
                            expandedItems.includes(item.text)
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          style={{
                            color: theme.palette.common.white,
                            fontSize: theme.typography.body1.fontSize,
                          }}
                        />
                      )}
                    </>
                  )}
                </ListItemButton>
              </ListItem>

              {item.children && isExpanded && (
                <Collapse
                  in={expandedItems.includes(item.text)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItem key={child.text} disablePadding>
                        <ListItemButton
                          sx={{
                            pl: 4,
                            mx: 1,
                            borderRadius: theme.shape.borderRadius,
                            "&:hover": {
                              backgroundColor: theme.palette.grey[100],
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 5 }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: theme.typography.body2.fontSize,
                                  color: theme.palette.common.white,
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: theme.typography.body2.fontSize,
                              color: theme.palette.common.white,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { lg: currentWidth }, flexShrink: { lg: 0 } }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.secondary.main,
            borderRight: "none",
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
            backgroundColor: theme.palette.grey[900],
            borderRight: "none",
            zIndex: theme.zIndex.drawer,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
