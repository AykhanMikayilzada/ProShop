import React from "react";
import picture1 from "./imgs/img1.svg";
import picture2 from "./imgs/img2.svg";
import picture3 from "./imgs/img3.svg";
import picture4 from "./imgs/img4.svg";
import vector from "./imgs/vector.svg";
import { Box, Button, Image, Text } from "@chakra-ui/react";

function FooterSide() {
  return (
    <>
      <Box
        pos="relative"
        bg="#008475"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="730px"  // Yeşil kısmın yüksekliği
        mt="551px"
      >
        <Box
          pos="absolute"
          top="-231px"
          bg="#F2F9F8"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
          borderRadius="65px"
          maxW="1200px"
          h="461px"
          width="100%"
          display="flex"
          justifyContent="center"
          className="whiteFooterBox"
        >
          <Image src={picture1} pos="absolute" top="0" left="0" />
          <Image src={picture2} pos="absolute" top="0" />
          <Image src={picture3} pos="absolute" top="0" right="55px" />
          <Image src={picture4} pos="absolute" bottom="0" right="226px" />

          <Box>
            <Box pos="absolute" left="109px" bottom="73px">
              <Text fontWeight="bold" fontSize="34px">
                Launch Sale is On
              </Text>
              <Text fontSize="26px" textColor="#82828B">
                Shop today
              </Text>
            </Box>

            <Button
              w="100px"
              h="89px"
              pos="absolute"
              bottom="85px"
              right="55px"
            >
              <Image src={vector} w="46px" h="26px" />
            </Button>
          </Box>
        </Box>
        <Box
          className="footerBox"
          display="flex"
          justifyContent="center"
          w="100%"
          p={{ base: "20px", md: "40px" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDir="column"
            gap={{ base: "20px", md: "64px" }}
            w="100%"
          >
            <Text
              textColor="#F2F9F8"
              fontWeight="bold"
              fontSize={{ base: "24px", md: "34px" }}
              mt={{ base: "100px", md: "250px" }}
              textAlign="center"
            >
              Dairy Farm Products
            </Text>
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
              <Box display="flex" flexDir="column" alignItems={{ base: "center", md: "flex-start" }}>
                <Text textColor="#78BAB5" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Links
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Contact
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Affiliation
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Terms of Use
                </Text>
              </Box>
              <Box display="flex" flexDir="column" alignItems={{ base: "center", md: "flex-start" }}>
                <Text textColor="#78BAB5" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Company
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Blog
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Shop
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  About
                </Text>
              </Box>
              <Box display="flex" flexDir="column" alignItems={{ base: "center", md: "flex-start" }}>
                <Text textColor="#78BAB5" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Categories
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Eggs
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Drinks
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Eatables
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Meat & Cheese
                </Text>
              </Box>
              <Box display="flex" flexDir="column" alignItems={{ base: "center", md: "flex-start" }}>
                <Text textColor="#78BAB5" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Terms
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Privacy Policy
                </Text>
                <Text textColor="#F2F9F8" fontSize={{ base: "14px", md: "18px" }} _hover={{ cursor: "pointer" }}>
                  Terms & Conditions
                </Text>
              </Box>
            </Box>
            <Box
              bg="white"
              maxW="1200px"
              w="100%"
              h="2px"
              borderRadius="12px"
              m="auto"
              opacity="50%"
            ></Box>
            <Text
              textAlign="center"
              textColor="#78BAB5"
              fontSize={{ base: "12px", md: "14px" }}
            >
              © All Rights Reserved Proshop MMC Privacy Policy
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FooterSide;
