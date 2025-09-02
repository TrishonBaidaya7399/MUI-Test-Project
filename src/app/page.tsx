import MainLayout from "@/components/layout/MainLayout";
import PayingGames from "@/components/Pages/HomePage/PayingGames";
import TrendingContainer from "@/components/Pages/HomePage/Trending/TrendingContainer";
import UserInfo from "@/components/Pages/HomePage/UserInfo";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <MainLayout>
      {/* top section */}
      <Box
        sx={{
          color: "var(--white)",
          display: "flex",
          flexDirection: { md: "row" , xs: 'column' },
          justifyContent: { lg: "space-between", xs: "start" },
          alignItems: { lg: "center", xs: "start" },
          gap: { xl: "60px", lg:'24px', xs: "16px" },
          marginTop: { lg: "36px", xs: '36px' },
          marginBottom: { lg: "36px", xs: '16px' },
        }}
        className="app-container"
      >
        <UserInfo />
        <PayingGames />
      </Box>
      {/* trending page section */}
      <TrendingContainer />
    </MainLayout>
  );
}
