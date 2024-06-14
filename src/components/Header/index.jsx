import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import Logo from "./imgs/proshoplogo.svg";
import en from "./imgs/en.png";
import az from "./imgs/az.png";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const newPath = `/${lng}${location.pathname}`;
    window.history.replaceState(null, null, newPath);
  };

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
        <Link to="/">
          <Image src={Logo} alt="logo" w={{ base: "200px", md: "300px" }} />
        </Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        order={{ base: "2", md: "1" }}
        w={{ base: "100%", md: "fit-content" }}
        justifyContent={{ base: "center", md: "" }}
        mt={{ base: "20px", md: "0" }}
      >
        <Button variant="ghost" onClick={() => changeLanguage("az")}>
          <Image src={az} alt="Azerbaijan" w="35px" />
        </Button>
        <Button variant="ghost" onClick={() => changeLanguage("en")}>
          <Image src={en} alt="English" w="35px" />
        </Button>
      </Box>
      <Box
        className="menu"
        display={{ base: "none", md: "flex" }}
        gap={{ base: "20px", md: "40px" }}
      >
        <Link to="/">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            {t("home")}
          </Text>
        </Link>
        <Link to="/about">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            {t("about")}
          </Text>
        </Link>
        <Menu isLazy>
          <MenuButton>
            <Text
              fontSize="18px"
              textColor="#82828B"
              _hover={{ textColor: "teal", cursor: "pointer" }}
            >
              {t("products")}
            </Text>
          </MenuButton>
          <MenuList>
            <Link to="/products/all">
              <MenuItem>{t("allProducts")}</MenuItem>
            </Link>
            <Link to="/products/auto-branding">
              <MenuItem>{t("autoBranding")}</MenuItem>
            </Link>
            <Link to="/products/bilboards">
              <MenuItem>{t("bilboards")}</MenuItem>
            </Link>
            <Link to="/products/events">
              <MenuItem>{t("events")}</MenuItem>
            </Link>
            <Link to="/products/exibition-stands">
              <MenuItem>{t("exibitionStands")}</MenuItem>
            </Link>
            <Link to="/products/indoor">
              <MenuItem>{t("indoor")}</MenuItem>
            </Link>
            <Link to="/products/outdoor">
              <MenuItem>{t("outdoor")}</MenuItem>
            </Link>
            <Link to="/products/polgraphy">
              <MenuItem>{t("polgraphy")}</MenuItem>
            </Link>
            <Link to="/products/promo">
              <MenuItem>{t("promo")}</MenuItem>
            </Link>
            <Link to="/products/shop-stands">
              <MenuItem>{t("shopStands")}</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link to="/contact">
          <Text
            fontSize="18px"
            textColor="#82828B"
            _hover={{ textColor: "teal", cursor: "pointer" }}
          >
            {t("contact")}
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
          <DrawerHeader borderBottomWidth="1px">{t("menu")}</DrawerHeader>
          <DrawerBody>
            <Link to="/">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                {t("home")}
              </Text>
            </Link>
            <Link to="/about">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                {t("about")}
              </Text>
            </Link>
            <Menu isLazy>
              <MenuButton>
                <Text
                  fontSize="18px"
                  textColor="#82828B"
                  _hover={{ textColor: "teal", cursor: "pointer" }}
                >
                  {t("products")}
                </Text>
              </MenuButton>
              <MenuList>
                <Link to="/products/all">
                  <MenuItem>{t("allProducts")}</MenuItem>
                </Link>
                <Link to="/products/auto-branding">
                  <MenuItem>{t("autoBranding")}</MenuItem>
                </Link>
                <Link to="/products/bilboards">
                  <MenuItem>{t("bilboards")}</MenuItem>
                </Link>
                <Link to="/products/events">
                  <MenuItem>{t("events")}</MenuItem>
                </Link>
                <Link to="/products/exibition-stands">
                  <MenuItem>{t("exibitionStands")}</MenuItem>
                </Link>
                <Link to="/products/indoor">
                  <MenuItem>{t("indoor")}</MenuItem>
                </Link>
                <Link to="/products/outdoor">
                  <MenuItem>{t("outdoor")}</MenuItem>
                </Link>
                <Link to="/products/polgraphy">
                  <MenuItem>{t("polgraphy")}</MenuItem>
                </Link>
                <Link to="/products/promo">
                  <MenuItem>{t("promo")}</MenuItem>
                </Link>
                <Link to="/products/shop-stands">
                  <MenuItem>{t("shopStands")}</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Link to="/contact">
              <Text
                fontSize="18px"
                textColor="#82828B"
                _hover={{ textColor: "teal", cursor: "pointer" }}
              >
                {t("contact")}
              </Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
