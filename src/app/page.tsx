import MainLayout from "@/components/layout/MainLayout";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <MainLayout>
      <Box className='app-container'>
        <Typography variant="h4" component="h1" gutterBottom>
          Casino & Sports Platform
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Main content area - ready for casino and sports components
        </Typography>
      </Box>
    </MainLayout>
  );
}
