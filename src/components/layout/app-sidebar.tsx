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
import { useTheme } from "@mui/material/styles";


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
  const drawerWidth = 240;
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

  const isExpanded = true;
  const currentWidth = drawerWidth;

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.bgSideBar,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Box sx={{ p: theme.spacing(2) }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(1.5),
            width: "100%",
          }}
        >
          {isMobile ? (
            <AnimatedHamburger
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              color={theme.palette.primary.contrastText}
              size={30}
            />
          ) : (
            <MenuIcon fontSize="large" />
          )}

          {isExpanded && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1),
              }}
            >
              <Button
                variant="contained" 
                sx={{
                  bgcolor: theme.palette.background.button,
                  color: theme.palette.primary.contrastText,
                  textTransform: "none",
                  borderRadius: theme.spacing(1),
                  fontSize: theme.spacing(1.75),
                  fontWeight: 500,
                  minWidth: "auto",
                  height: theme.spacing(5.5),
                  px: theme.spacing(2),
                  "&:hover": {
                    bgcolor: theme.palette.background.bgLight,
                    color: theme.palette.background.black,
                  },
                }}
              >
                Casino
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: theme.palette.background.button,
                  color: theme.palette.primary.contrastText,
                  textTransform: "none",
                  borderRadius: theme.spacing(1),
                  height: theme.spacing(5.5),
                  fontSize: theme.spacing(1.75),
                  fontWeight: 500,
                  minWidth: "auto",
                  px: theme.spacing(2),
                  "&:hover": {
                    bgcolor: theme.palette.background.bgLight,
                    color: theme.palette.background.black,
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
          gap: theme.spacing(1),
          padding: theme.spacing(2),
        }}
      >
        <List
          sx={{
            flexGrow:1,
            p: theme.spacing(0),
            bgcolor: theme.palette.background.black,
            borderRadius: theme.spacing(1),
          }}
        >
          {menuItems1.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: theme.spacing(1.25),
                    borderRadius: theme.spacing(1),
                    minHeight: theme.spacing(6),
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      bgcolor: theme.palette.background.black,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? theme.spacing(5) : "auto",
                      mr: isExpanded ? theme.spacing(1) : theme.spacing(0),
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: theme.spacing(2.5),
                          color: theme.palette.primary.contrastText,
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
                          fontSize: theme.spacing(1.75),
                          color: theme.palette.primary.contrastText,
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
                          style={{ color: theme.palette.primary.contrastText, fontSize: theme.spacing(2.5) }}
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
                            pl: theme.spacing(4),
                            mx: theme.spacing(1),
                            borderRadius: theme.spacing(1),
                            "&:hover": {
                              bgcolor: theme.palette.background.black,
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: theme.spacing(2.5),
                                  color: theme.palette.primary.contrastText,
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: theme.spacing(1.6),
                              color: theme.palette.primary.contrastText,
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
            flexGrow:1,
            py: theme.spacing(0),
            bgcolor: theme.palette.background.black,
            borderRadius: theme.spacing(1),
          }}
        >
          {menuItems2.map((item) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => item.children && handleItemClick(item.text)}
                  sx={{
                    p: theme.spacing(1.25),
                    borderRadius: theme.spacing(1),
                    minHeight: theme.spacing(6),
                    justifyContent: isExpanded ? "initial" : "center",
                    "&:hover": {
                      bgcolor: theme.palette.background.black,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isExpanded ? theme.spacing(5) : "auto",
                      mr: isExpanded ? theme.spacing(1) : theme.spacing(0),
                      justifyContent: "center",
                    }}
                  >
                    {typeof item.icon === "string" ? (
                      <Icon
                        icon={item.icon}
                        style={{
                          fontSize: theme.spacing(2.5),
                          color: theme.palette.primary.contrastText,
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
                          fontSize: theme.spacing(1.75),
                          color: theme.palette.primary.contrastText,
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
                          style={{ color: theme.palette.primary.contrastText, fontSize: theme.spacing(2.5) }}
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
                            pl: theme.spacing(4),
                            mx: theme.spacing(1),
                            borderRadius: theme.spacing(1),
                            "&:hover": {
                              bgcolor: theme.palette.background.black,
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                            {typeof child.icon === "string" ? (
                              <Icon
                                icon={child.icon}
                                style={{
                                  fontSize: theme.spacing(2.5),
                                  color: theme.palette.primary.contrastText,
                                }}
                              />
                            ) : (
                              child.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: theme.spacing(1.6),
                              color: theme.palette.primary.contrastText,
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
      sx={{ width: { lg: currentWidth }, flexShrink: { lg: theme.spacing(0) } }}
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
            bgcolor: theme.palette.background.bgLight,
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
            bgcolor: theme.palette.background.bgSideBar,
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
