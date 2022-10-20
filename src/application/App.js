import React from "react";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";
import LandingPage from "../presentation/components/pages/landingPage/LandingPage";

function App() {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
