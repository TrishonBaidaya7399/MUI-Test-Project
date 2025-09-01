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
          color: "#ffffff",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: { lg: "space-between", xs: "start" },
          alignItems: { lg: "center", xs: "start" },
          gap: { lg: "50px", xs: "16px" },
          marginTop: { lg: "20px", xs: 0 },
          marginBottom: { lg: "20px", xs: 0 },
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
