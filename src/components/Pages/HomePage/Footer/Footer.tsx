import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
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
          py: 2,
          borderRadius: 2,
          padding: "24px",
          marginTop: {lg: '36px', xs: '16px'}
        }}
      >
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                Casino
              </Typography>
              <Box>
                <Typography variant="body2">Casino Games</Typography>
                <Typography variant="body2">Slots</Typography>
                <Typography variant="body2">Live Casino</Typography>
                <Typography variant="body2">Roulette</Typography>
                <Typography variant="body2">Blackjack</Typography>
                <Typography variant="body2">Poker</Typography>
                <Typography variant="body2">Promos & Competitions</Typography>
                <Typography variant="body2">Brand Name Engine</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                Casino Sportsbook
              </Typography>
              <Box>
                <Typography variant="body2">Live Sports</Typography>
                <Typography variant="body2">Soccer</Typography>
                <Typography variant="body2">Basketball</Typography>
                <Typography variant="body2">Tennis</Typography>
                <Typography variant="body2">eSports</Typography>
                <Typography variant="body2">Bet Bonuses</Typography>
                <Typography variant="body2">Sports Rules</Typography>
                <Typography variant="body2">Racing Rules</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                Support
              </Typography>
              <Box>
                <Typography variant="body2">Help Center</Typography>
                <Typography variant="body2">Fairness</Typography>
                <Typography variant="body2">Gambling Helpline</Typography>
                <Typography variant="body2">Live Support</Typography>
                <Typography variant="body2">Self Exclusion</Typography>
                <Typography variant="body2">Law Enforcement Request</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                About Us
              </Typography>
              <Box>
                <Typography variant="body2">VIP Club</Typography>
                <Typography variant="body2">Affiliate</Typography>
                <Typography variant="body2">Privacy Policy</Typography>
                <Typography variant="body2">AML Policy</Typography>
                <Typography variant="body2">Terms of Service</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                Payment Info
              </Typography>
              <Box>
                <Typography variant="body2">Deposits & Withdrawals</Typography>
                <Typography variant="body2">Currency Guide</Typography>
                <Typography variant="body2">Crypto Guide</Typography>
                <Typography variant="body2">Supported Crypto</Typography>
                <Typography variant="body2">How to Use the Vault</Typography>
                <Typography variant="body2">How Much to Bet With</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: "bold", color: "var(--text-gray)" }}
              >
                FAQ
              </Typography>
              <Box>
                <Typography variant="body2">How-to Guides</Typography>
                <Typography variant="body2">Online Casino Guide</Typography>
                <Typography variant="body2">Sports Betting Guide</Typography>
                <Typography variant="body2">
                  How to Live Stream Sports
                </Typography>
                <Typography variant="body2">Brand Name VIP Guide</Typography>
                <Typography variant="body2">House Edge Guide</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              mt: 4,
              pt: 2,
              gap: 3,
              borderTop: "1px solid var(--white-3)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Social icons */}
              <Link href="#">
                <FacebookIconSVG />
              </Link>
              <Link href="#">
                <XIconSVG />
              </Link>
              <Link href="#">
                <MessageIconSVG />
              </Link>
              <Link href="#">
                <InstaIconSVG />
              </Link>
              <Link href="#">
                <YoutubeIconSVG />
              </Link>
              <Link href="#">
                <TiktokIconSVG />
              </Link>
              <Link href="#">
                <LinkedinIconSVG />
              </Link>
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: { xs: "center", md: "right" },
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
