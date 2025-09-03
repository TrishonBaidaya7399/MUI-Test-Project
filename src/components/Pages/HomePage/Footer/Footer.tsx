import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIconSVG from "@/components/svg_icons/FacebookIconSVG";
import XIconSVG from "@/components/svg_icons/XIconSVG";
import MessageIconSVG from "@/components/svg_icons/MessageIconSVG";
import InstaIconSVG from "@/components/svg_icons/InstaIconSVG";
import YoutubeIconSVG from "@/components/svg_icons/YoutubeIconSVG";
import TiktokIconSVG from "@/components/svg_icons/TiktokIconSVG";
import LinkedinIconSVG from "@/components/svg_icons/LinkedinIconSVG";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="app-container">
      <Box
        component="footer"
        sx={{
          backgroundColor: "var(--card-background1)",
          color: "var(--text-gray)",
          py: 4,
          borderRadius: 2,
          padding: "24px",
          marginTop: { lg: "36px", xs: "16px" },
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Grid
            container
            spacing={2}
            columns={{ xs: 6, sm: 12, md: 18, lg: 24 }}
            sx={{
              "& > div": {
                padding: "0 12px",
              },
            }}
          >
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                Casino
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Casino Games
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Slots
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Live Casino
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Roulette
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Blackjack
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Poker
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Promos & Competitions
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Brand Name Engine
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                Casino
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Sportsbook
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Live Sports
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Soccer
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Basketball
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Tennis
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    eSports
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Bet Bonuses
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Sports Rules
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Racing Rules
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                Support
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Help Center
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Fairness
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Gambling Helpline
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Live Support
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Self Exclusion
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Law Enforcement Request
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                About Us
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    VIP Club
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Affiliate
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    AML Policy
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Terms of Service
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                Payment Info
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Deposits & Withdrawals
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Currency Guide
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Crypto Guide
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Supported Crypto
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    How to Use the Vault
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    How Much to Bet With
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }} className='footer-items'>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "var(--white)" }}
              >
                FAQ
              </Typography>
              <Box>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    How-to Guides
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Online Casino Guide
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Sports Betting Guide
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    How to Live Stream Sports
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    Brand Name VIP Guide
                  </Typography>
                </Link>
                <Link href="#" className="var(--white-3)">
                  <Typography
                    variant="body2"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "var(--white)" },
                    }}
                  >
                    House Edge Guide
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              mt: 4,
              pt: 2,
              gap: 2,
              borderTop: "1px solid var(--white-3)",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                mb: { xs: 2, md: 0 },
              }}
            >
              <Link href="#" className="var(--white-3)">
                <FacebookIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <XIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <MessageIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <InstaIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <YoutubeIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <TiktokIconSVG />
              </Link>
              <Link href="#" className="var(--white-3)">
                <LinkedinIconSVG />
              </Link>
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: { xs: "center", md: "right" },
                color: "var(--text-gray)",
              }}
            >
              &copy; 2025 brandname.com | All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
