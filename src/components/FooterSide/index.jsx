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
        bg="teal"
        display="flex"
        justifyContent="center"
        mt="551px"
      >
        <Box
          pos="absolute"
          top="-231px"
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
          borderRadius="65px"
          maxW="1200px"
          h="461px"
          width="100%"
          display="flex"
          justifyContent="center"
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

        
      </Box>
    </>
  );
}

export default FooterSide;
