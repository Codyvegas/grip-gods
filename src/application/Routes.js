import { Routes, Route } from "react-router-dom";
import LandingPage from "../presentation/components/pages/landingPage/LandingPage";
import FollowUsPage from "../presentation/components/pages/followUsPage/FollowUs";
import DripGodPage from "../presentation/components/pages/dripGodPage/DripGod";
import AboutUsPage from "../presentation/components/pages/aboutUsPage/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/follow-us" element={<FollowUsPage />} />
      <Route path="/drip-gods" element={<DripGodPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default AppRoutes;
