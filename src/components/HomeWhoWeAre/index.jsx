import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PartnerLogos from "../PartnerLogos"
import comma from "./imgs/comma.svg";
import signature from "./imgs/signature.svg";

function HomeWhoWeAre() {
  return (
    <>
      <Box
        className="mainBox"
        display="flex"
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        maxW="1200px"
        m="auto"
        mb="98px"
        flexWrap="wrap"
      >
        <Box
          className="leftSide"
          display="flex"
          flexDir="column"
          gap="20px"
          alignItems={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          data-aos="fade-right"
        >
          <Text fontSize="32px" fontWeight="bold">
            Who we are?
          </Text>
          <Text maxW="500px" fontSize="18px" textColor="#83838C">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            velit sunt dolore id adipisci obcaecati eos
            <br />
            <br />
            officiis ipsum quas velit deserunt iure ratione eum odio. Voluptates
            ipsam alias, ducimus eaque tempora iure velit.
          </Text>
          <Button
            bg="teal"
            w="148px"
            h="54px"
            textColor="white"
            _hover={{ backgroundColor: "#38B2AC" }}
          >
            <Link to="/about">Readmore</Link>
          </Button>
        </Box>
        <Box
          className="rightSide"
          display="flex"
          flexDir="column"
          gap="10px"
          alignItems={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          data-aos="fade-left"
        >
          <Image src={comma} alt="comma" w="40px" />
          <Box className="divider" w="100px" h="3px" bg="black"></Box>
          <Text
            maxW="500px"
            fontSize="18px"
            textColor="black"
            fontWeight="bold"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque
            velit, culpa reiciendis incidunt similique, tenetur nulla ducimus
            molestiae consequuntur tempora nihil a quaerat adipisci odit
            obcaecati nobis molestias!
          </Text>
          <Image src={signature} w="70px" />
        </Box>
      </Box>
      <PartnerLogos /> 
    </>
  );
}

export default HomeWhoWeAre;
