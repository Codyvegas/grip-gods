import React from "react";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";
import LandingPage from "../presentation/components/pages/landingPage/LandingPage";
import Header from "../presentation/components/header/Header";

function App() {
  return (
    <div className="app">
      <LandingPage />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
