import React from "react";
import Header from "../../components/Header";
import FooterSide from "../../components/FooterSide";
import HomeMainSide from "../../components/HomeMainSide";
import HomeWhoWeAre from "../../components/HomeWhoWeAre";

function Home() {
  return (
    <>
        <Header />
        <HomeMainSide />
        <FooterSide />
    </>
  );
}

export default Home;
