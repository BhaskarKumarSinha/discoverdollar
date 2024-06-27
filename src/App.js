import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Headers from "./components/Header";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

import CardComponents from "./components/CardComponents";
import HouseHoldsComponents from "./components/HouseHoldsComponents";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Headers />
      <NavBar />
      <Banner />
      <CardComponents />
      <HouseHoldsComponents />
      <Footer />
    </Router>
  );
};

export default App;
