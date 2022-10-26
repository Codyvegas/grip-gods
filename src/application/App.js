import React from "react";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
