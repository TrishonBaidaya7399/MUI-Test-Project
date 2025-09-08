import React from "react";
import dynamic from "next/dynamic";
const BetsTable = dynamic(
  () => import("@/sections/home/components/bets-components/bets-table")
);
const Footer = dynamic(
  () => import("@/sections/home/components/footer/footer")
);

import { mockPromotions } from "@/sections/home/components/promotions/mock-promotions";

const HomePageBanner = dynamic(
  () => import("@/sections/home/components/top-section/home-page-banner")
);
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


function HomePageView() {
  return (
    <div>
      {/* top section */}
      <HomePageBanner/>
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
