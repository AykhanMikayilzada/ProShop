// Header.jsx
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
        <Menu isLazy>
          <MenuButton>
            <Text
              fontSize="18px"
              textColor="#82828B"
              _hover={{ textColor: "teal", cursor: "pointer" }}
            >
              Products
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/products/all">All Products</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/auto-branding">Auto Branding</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/bilboards">Bilboards</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/events">Events</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/exibition-stands">Exibition Stands</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/indoor">Indoor</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/outdoor">Outdoor</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/polgraphy">Polgraphy</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/promo">Promo</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/shop-stands">Shop Stands</Link>
            </MenuItem>
          </MenuList>
        </Menu>
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
            <Menu isLazy>
              <MenuButton>
                <Text
                  fontSize="18px"
                  textColor="#82828B"
                  _hover={{ textColor: "teal", cursor: "pointer" }}
                >
                  Products
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/products/all">All Products</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/auto-branding">Autobranding</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/bilboards">Bilboards</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/events">Events</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/exibition-stands">Exibition Stands</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/indoor">Indoor</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/outdoor">Outdoor</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/polgraphy">Polygraph</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/promo">Promo</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products/shop-stands">Shop Stands</Link>
                </MenuItem>
              </MenuList>
            </Menu>
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
