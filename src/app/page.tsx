import { Box, Typography } from "@mui/material";

export const generateMetadata = async () => {
  const title = "Brand Name - Casino & Sports Betting Platform";
  const description =
    "Join Brand Name, a leading online gambling platform since 2017, offering a wide variety of casino games, sports betting, and eSports with unbeatable odds. Enjoy secure betting with over 20 cryptocurrencies, exclusive VIP Club benefits, and regular promotions.";
  const keywords = [
    "online casino",
    "sports betting",
    "eSports betting",
    "crypto betting",
    "slot games",
    "live casino",
    "Stake Originals",
    "VIP Club",
    "promotions",
    "Brand Name",
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: "https://mui-test-project.vercel.app/",
      siteName: "Brand Name",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@BrandName",
    },
  };
};

export default function Page() {
  return (
    <Box
    className='app-container'
      sx={{
        width: {xl: "70%", md: '100%'},
        height: "60vh",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        gap: 4
      }}
    >
      <Typography variant="h2" color="primary">
        Casino & Sports Betting Platform
      </Typography>
      <Typography variant="body1" color="primary" align="center">
        Join Brand Name, a leading online gambling platform since 2017, offering
        a wide variety of casino games, sports betting, and eSports with
        unbeatable odds. Enjoy secure betting with over 20 cryptocurrencies,
        exclusive VIP Club benefits, and regular promotions.
      </Typography>
    </Box>
  );
}
