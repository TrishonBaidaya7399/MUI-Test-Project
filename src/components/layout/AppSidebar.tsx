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
import { useSidebarStore } from "@/store/sidebarStore";
import AnimatedHamburger from "../ui/AnimatedHamburger";
import PromotionsSVG from "../svg_icons/PromotionsSVG";
import AffiliateSVG from "../svg_icons/AffiliateSVG";
import SponsorSVG from "../svg_icons/SponsorSVG";
import LockSVG from "../svg_icons/LockSVG";
import LiveSupportSVG from "../svg_icons/LiveSupportSVG";
import TrophySVG from "../svg_icons/TroffeeSVG";
import BlogSVG from "../svg_icons/BlogSVG";
import ForumSVG from "../svg_icons/ForumSVG";

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

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

  const {
    mobileOpen,
    collapsed,
    hovered,
    setMobileOpen,
    toggleCollapsed,
    setHovered,
  } = useSidebarStore();

  const handleItemClick = (itemText: string) => {
    if (expandedItems.includes(itemText)) {
      setExpandedItems(expandedItems.filter((item) => item !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  const isExpanded = !isMobile && (collapsed ? hovered : true);
  const currentWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--background-1)",
        color: "var(--white)",
      }}
      onMouseEnter={() => {
        if (!isMobile && collapsed) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile && collapsed) {
          setHovered(false);
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: '12px',
            width: "100%",
          }}
        >
          <AnimatedHamburger
            isOpen={collapsed}
            onClick={toggleCollapsed}
            color="var(--white)"
            size={30}
          />

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
                  backgroundColor: "var(--white-2)",
                  color: "var(--white)",
                  textTransform: "none",
                  borderRadius: 1,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  minWidth: "auto",
                  height: '44px',
                  px: 2,
                  "&:hover": {
                    backgroundColor: "var(--secondary)",
                    color: 'var(--text-black)'
                  },
                }}
                >
                Casino
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--white-2)",
                  color: "var(--white)",
                  textTransform: "none",
                  borderRadius: 1,
                  height: '44px',
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  minWidth: "auto",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "var(--secondary)",
                    color: 'var(--text-black)'
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
          gap: "8px",
          padding: "16px",
        }}
      >
        <List
          sx={{
            flexGrow: 1,
            p: 0,
            backgroundColor: "var(--background-3)",
            borderRadius: 1,
          }}
        >
          {menuItems1.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: "10px",
                    borderRadius: 1,
                    minHeight: 48,
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      backgroundColor: "var(--white-2)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? 40 : "auto",
                      mr: isExpanded ? 1 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: 20,
                          color: "var(--text-white)",
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
                          fontSize: "0.875rem",
                          color: "var(--text-white)",
                          fontWeight: 400,
                        }}
                      />
                      {item.children && (
                        <Icon
                          icon={
                            expandedItems.includes(item.text)
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          style={{ color: "var(--text-white)", fontSize: 20 }}
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
                            borderRadius: 1,
                            "&:hover": {
                              backgroundColor: "var(--white-2)",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: 20,
                                  color: "var(--text-white)",
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: "0.8rem",
                              color: "var(--text-white)",
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
            backgroundColor: "var(--background-3)",
            borderRadius: 1,
          }}
        >
          {menuItems2.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: "10px",
                    borderRadius: 1,
                    minHeight: 48,
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      backgroundColor: "var(--white-2)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? 40 : "auto",
                      mr: isExpanded ? 1 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: 20,
                          color: "var(--text-white)",
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
                          fontSize: "0.875rem",
                          color: "var(--text-white)",
                          fontWeight: 400,
                        }}
                      />
                      {item.children && (
                        <Icon
                          icon={
                            expandedItems.includes(item.text)
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          style={{ color: "var(--text-white)", fontSize: 20 }}
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
                            borderRadius: 1,
                            "&:hover": {
                              backgroundColor: "var(--white-2)",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: 20,
                                  color: "var(--text-white)",
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: "0.8rem",
                              color: "var(--text-white)",
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
          {/* <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#404040",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon
                  icon="mdi:web"
                  style={{ color: "var(--text-white)", fontSize: 20 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Language English"
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  color: "var(--text-white)",
                  fontWeight: 400,
                }}
              />
              <Icon
                icon="mdi:chevron-down"
                style={{ color: "#888888", fontSize: 20 }}
              />
            </ListItemButton>
          </ListItem> */}
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
            backgroundColor: "var(--secondary)",
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
            width: currentWidth,
            backgroundColor: "#2a2a2a",
            borderRight: "none",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
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
