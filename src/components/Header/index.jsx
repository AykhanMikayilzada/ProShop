import React from "react";
import Logo from "./imgs/proshoplogo.svg";
import { Box, Image, Text } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        className="header main"
      >
        <Box className="logo">
          <Image src={Logo} alt="logo" w="200px" />
        </Box>
        <Box className="menu" display="flex" gap="40px" pt="33px" pb="33px">
          <Text textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Home
          </Text>
          <Text textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            About
          </Text>
          <Text textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Partners
          </Text>
          <Text textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Services
          </Text>
          <Text textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Contact
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Header;
