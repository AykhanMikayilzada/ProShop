import React from "react";
import SimpleSlider from "../SimpleSlider";
import { Box, Button, Text } from "@chakra-ui/react";
import HomeCards from "../HomeCards";

const HomeMainSide = () => {
  return (
    <>
      <SimpleSlider />
      <HomeCards />
    </>
  );
};

export default HomeMainSide;
