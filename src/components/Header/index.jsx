import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./imgs/proshoplogo.svg";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className="header main"
      maxW="1440px"
      mx="auto"
      px="20px"
      py="15px"
      boxSizing="border-box"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Box className="logo" flexShrink="0" mr={{ base: "20px", md: "40px" }}>
        <Image src={Logo} alt="logo" w={{ base: "200px", md: "300px" }} />
      </Box>
      <Box className="menu" display={{ base: "none", md: "flex" }} gap="40px">
        <Link to="/">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            About
          </Text>
        </Link>
        <Link to="/products">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            Products
          </Text>
        </Link>
        <Link to="/contact">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            Contact
          </Text>
        </Link>
      </Box>
      <Box display={{ base: "flex", md: "none" }}>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
        />
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Link to="/">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                About
              </Text>
            </Link>
            <Link to="/products">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                Products
              </Text>
            </Link>
            <Link to="/contact">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                Contact
              </Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
