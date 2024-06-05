import React, { useEffect } from "react";
import Header from "../../components/Header";
import FooterSide from "../../components/FooterSide";
import { Box, Heading, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        pt="100px"
        flexDir="column"
        data-aos="fade"
      >
        <Heading pb="50px" fontSize="40px">About Us</Heading>
        <Text maxW="700px" fontSize="20px" textAlign="center" textColor="#888890">
          Proshop MMC, established in 2021, is a trusted company in the field of
          kitchen, promotional, and advertising product preparation. Our company
          provides services to various government and private institutions in
          Azerbaijan. Equipped with a professional team and modern equipment,
          Proshop MMC offers customers high-quality and diverse products based
          on years of experience. Each product is crafted with modern technology
          and quality materials, ensuring timely delivery to our customers. We
          conduct regular quality control measures to maintain high standards of
          customer service. Our website showcases detailed information about
          product varieties and prices for customer convenience, offering a wide
          range of products from economy to premium options. Our primary goal is
          to provide quality service and ensure customer satisfaction.
        </Text>
      </Box>
      <FooterSide />
    </>
  );
}

export default About;
