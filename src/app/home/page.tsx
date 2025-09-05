import dynamic from "next/dynamic";

const HomePageView = dynamic(() => import("@/sections/home/view"));

function HomePage() {
  return <HomePageView />;
}

export default HomePage;
