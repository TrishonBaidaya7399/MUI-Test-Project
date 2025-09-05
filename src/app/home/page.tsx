import dynamic from "next/dynamic";

const HomePageView = dynamic(() => import("@/sections/home/view"));

export const runtime = "edge";

function HomePage() {
  return <HomePageView />;
}

export default HomePage;
