import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import IntroSection from "./components/IntroSection";
import TopPicks from "./components/TopPicks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Banner />
      <IntroSection />
      <TopPicks />
      <Footer />
    </div>
  );
};

export default App;
