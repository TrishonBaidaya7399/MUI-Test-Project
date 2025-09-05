import React from "react";
import dynamic from "next/dynamic";
const BetsTable = dynamic(
  () => import("@/sections/home/components/bets-components/bets-table")
);
const Footer = dynamic(
  () => import("@/sections/home/components/footer/footer")
);
const PayingGames = dynamic(
  () => import("@/sections/home/components/playing-games/paying-games")
);
import { mockPromotions } from "@/sections/home/components/promotions/mock-promotions";
const PromotionsContainer = dynamic(
  () => import("@/sections/home/components/promotions/promotions-container")
);
const QuestionsAccordion = dynamic(
  () =>
    import("@/sections/home/components/questions-accordion/questions-accordion")
);
const TrendingContainer = dynamic(
  () => import("@/sections/home/components/trending/trending-container")
);
const UserInfo = dynamic(
  () => import("@/sections/home/components/user-info/user-info")
);
import { Box } from "@mui/material";


function HomePageView() {
  return (
    <div>
      {/* top section */}
      <Box
        sx={{
          color: "var(--white)",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
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
    </div>
  );
}

export default HomePageView;
