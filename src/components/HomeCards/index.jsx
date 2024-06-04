import { Box, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import img1 from "./imgs/product1.svg";
import img2 from "./imgs/product2.svg";
import img3 from "./imgs/product3.svg";
import img4 from "./imgs/product4.svg";
import img5 from "./imgs/product5.svg";
import img6 from "./imgs/product6.svg";
import img7 from "./imgs/product7.svg";
import img8 from "./imgs/product8.svg";

function HomeCards() {
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
          textColor="black"
          fontWeight="bold"
          fontSize="36px"
          w="100%"
          textAlign="start"
        >
          Featured Products
        </Text>
        <Box
          className="mainCard"
          display="flex"
          justifyContent="space-evenly"
          mt="50px"
          flexWrap="wrap"
          gap="16px"
          pb="50px"
        >
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img1} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img2} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img3} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img4} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img5} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img6} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img7} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
            <Box
              className="card"
              w="288px"
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt="80px"
            >
              <Image src={img8} pos="absolute" top="-70" />
              <Box
                display="flex"
                justifyContent="center"
                mt="154px"
                alignItems="center"
                gap="133px"
              >
                <Text textColor="black" fontWeight="bold" fontSize="16px">
                  6 Fresh & Tasty Eggs
                </Text>
              </Box>
            </Box>
        </Box>
        <Button
          w="300px"
          h="80px"
          mb="80px"
          bg="teal"
          _hover={{ backgroundColor: "#38B2AC" }}
          textColor="white"
          fontSize="20px"
        >
          View All Products
        </Button>
      </Box>
    </>
  );
}

export default HomeCards;
