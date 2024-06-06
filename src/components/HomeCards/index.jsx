import { Box, Text, Button, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import img1 from "./imgs/product1.svg";
import img2 from "./imgs/product2.svg";
import img3 from "./imgs/product3.svg";
import img4 from "./imgs/product4.svg";
import img5 from "./imgs/product5.svg";
import img6 from "./imgs/product6.svg";
import img7 from "./imgs/product7.svg";
import img8 from "./imgs/product8.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const texts = [
    "6 Fresh & Tasty Eggs",
    "Organic Strawberries",
    "Fresh Avocados",
    "Juicy Lemons",
    "Ripe Bananas",
    "Crunchy Apples",
    "Sweet Oranges",
    "Healthy Blueberries"
  ];

  return (
    <>
      <Box
        className="featuredProducts"
        display="flex"
        flexDir="column"
        maxW="1200px"
        w="100%"
        alignItems="center"
        m="auto"
        mt="120px"
      >
        <Text
          data-aos="fade-down"
          textColor="black"
          fontWeight="bold"
          fontSize={{ base: "30px", sm: "40px" }}
          w="100%"
          textAlign="center"
          pb="30px"
        >
          Featured Products
        </Text>
        <Box
          className="mainCard"
          display="flex"
          justifyContent="space-evenly"
          mt="50px"
          flexWrap="wrap"
          gap={{ base: "10px", sm: "16px" }}
          pb="50px"
        >
          {images.map((img, index) => (
            <Box
              key={index}
              data-aos="fade-down"
              className="card"
              w={{ base: "240px", sm: "288px" }}
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt={{ base: "100px", sm: "70px" }}
              overflow="visible"
              _hover={{ cursor: "pointer" }}
            >
              <Image
                src={img}
                pos="absolute"
                top="-70px"
                left="50%"
                transform="translateX(-50%)"
                w="auto"
                h="140px"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateX(-50%) scale(1.1)" }}
              />
              <Box
                display="flex"
                justifyContent="center"
                mt="100px"
                alignItems="center"
              >
                <Text
                  textColor="black"
                  fontWeight="bold"
                  fontSize={{ base: "16px", sm: "18px" }} 
                >
                  {texts[index]}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          w={{ base: "240px", sm: "300px" }} 
          h="70px" 
          mb="80px"
          bg="teal"
          data-aos="fade"
          _hover={{ backgroundColor: "#38B2AC" }}
          textColor="white"
          fontSize={{ base: "16px", sm: "20px" }} 
        >
          View All Products
        </Button>
      </Box>
    </>
  );
}

export default HomeCards;
