import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/proshoplogo.svg";
import { Box, Image, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      className="header main"
      gap="550px"
    >
      <Box className="logo">
        <Image src={Logo} alt="logo" w="300px" />
      </Box>  
      <Box className="menu" display="flex" gap="40px" pt="53px" pb="53px">
        <Link to="/">
          <Text fontSize="18px" textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text fontSize="18px" textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            About
          </Text>
        </Link>
        <Link to="/products">
          <Text fontSize="18px" textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Products
          </Text>
        </Link>
        <Link to="/contact">
          <Text fontSize="18px" textColor="#82828B" _hover={{ textColor: "teal", cursor: "pointer" }}>
            Contact
          </Text>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
