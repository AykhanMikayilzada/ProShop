import React, { useEffect } from "react";
import Header from "../../components/Header";
import FooterSide from "../../components/FooterSide";
import { Box, Heading, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        pt="100px"
        flexDir="column"
        data-aos="fade"
      >
        <Heading pb="50px" fontSize="40px">{t('aboutUs')}</Heading>
        <Text maxW="700px" fontSize="20px" textAlign="center" textColor="#888890">
          {t('aboutText')}
        </Text>
      </Box>
      <FooterSide />
    </>
  );
}

export default About;
