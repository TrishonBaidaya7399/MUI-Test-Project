import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("@/components/layout/MainLayout"));
const BetsTable = dynamic(
  () => import("@/components/Pages/HomePage/BetsComponents/BetsTable")
);
const Footer = dynamic(
  () => import("@/components/Pages/HomePage/Footer/Footer")
);
const PayingGames = dynamic(
  () => import("@/components/Pages/HomePage/PayingGames")
);
const PromotionsContainer = dynamic(
  () => import("@/components/Pages/HomePage/Promotions/PromotionsContainer")
);
const QuestionsAccordion = dynamic(
  () =>
    import("@/components/Pages/HomePage/QuestionsAccordion/QuestionsAccordion")
);
const TrendingContainer = dynamic(
  () => import("@/components/Pages/HomePage/Trending/TrendingContainer")
);
const UserInfo = dynamic(() => import("@/components/Pages/HomePage/UserInfo"));
import { Box } from "@mui/material";
import { mockPromotions } from "@/components/Pages/HomePage/Promotions/mockPromotions";

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
    <MainLayout>
      {/* top section */}
      <Box
        sx={{
          color: "var(--white)",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: { lg: "space-between", xs: "start" },
          alignItems: { lg: "center", xs: "start" },
          gap: { xl: "60px", lg: "16px", xs: "16px" },
          marginTop: { lg: "36px", xs: "36px" },
          marginBottom: { lg: "36px", xs: "16px" },
        }}
        className="app-container"
      >
        <UserInfo />
        <PayingGames />
      </Box>
      {/* trending section */}
      <TrendingContainer />
      {/* promotions section */}
      <PromotionsContainer items={mockPromotions} title="Promotions" />
      <div className="app-container">
        <BetsTable />
      </div>
      <QuestionsAccordion />
      <Footer />
    </MainLayout>
  );
}
