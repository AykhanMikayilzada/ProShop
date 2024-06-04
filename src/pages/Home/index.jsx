import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeMainSide from "../../components/HomeMainSide";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <>
        <Header />
        <HomeMainSide />
        <Footer />
    </>
  );
}

export default Home;
