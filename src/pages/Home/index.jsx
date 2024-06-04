import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeMainSide from "../../components/HomeMainSide";
import { Box } from "@chakra-ui/react";
import HomeWhoWeAre from "../../components/HomeWhoWeAre";

function Home() {
  return (
    <>
        <Header />
        <HomeMainSide />
        <HomeWhoWeAre />
        <Footer />
    </>
  );
}

export default Home;
