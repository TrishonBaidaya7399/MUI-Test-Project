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
import { theme } from "@/theme/theme";


function HomePageView() {
  return (
    <div>
      {/* top section */}
      <Box
        sx={{
          color: theme?.palette?.primary?.contrastText,
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: { lg: "space-between", xs: "start" },
          alignItems: { lg: "center", xs: "start" },
          gap: { xl: 7.5, lg: 2, xs: 2 } ,
     marginTop: { lg: 4.5, xs: 4.5 }, 
marginBottom: { lg: 4.5, xs: 2 }, 
        }}
        className="app-container"
      >s
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
