import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "./imgs/proshoplogo.svg";

function Header() {
  return (
    <>
      <Box
        w="100%"
        h="90px"
        bg="black"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        className="mainBox"
      >
        <Box w="200px" className="Logo">
          <img src={Logo} alt="logo" />
        </Box>

        <Box
          className="Menu"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="30px"
        >
          <Text textColor="#CDAD68">
            <a href="#">Home</a>
          </Text>

          <Text textColor="#CDAD68">
            <a href="#">About</a>
          </Text>

          <Text textColor="#CDAD68">
            <a href="#">Partners</a>
          </Text>

          <Text textColor="#CDAD68">
            <Menu isLazy>
              <MenuButton>
                Services <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Auto Branding</MenuItem>
                <MenuItem>Bilboards</MenuItem>
                <MenuItem>Events</MenuItem>
                <MenuItem>Exibition Stands</MenuItem>
                <MenuItem>Indoor</MenuItem>
                <MenuItem>Outdoor</MenuItem>
                <MenuItem>Polygraph</MenuItem>
                <MenuItem>Promo</MenuItem>
                <MenuItem>Shop Stands</MenuItem>
              </MenuList>
            </Menu>
          </Text>

          <Text textColor="#CDAD68">
            <a href="#">Contact</a>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Header;
