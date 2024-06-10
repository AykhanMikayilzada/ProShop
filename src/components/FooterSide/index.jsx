import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini ekledim
import picture1 from "./imgs/img1.svg";
import picture2 from "./imgs/img2.svg";
import picture3 from "./imgs/img3.svg";
import picture4 from "./imgs/img4.svg";
import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../Header/imgs/proshoplogo.svg";
import "aos/dist/aos.css";
import Aos from "aos";

function FooterSide() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box
        pos="relative"
        bg="#008475"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="330px"
        mt={{ base: "300px", md: "551px" }}
      >
        <Box
          pos="absolute"
          top={{ base: "-191px", md: "-231px" }}
          bg="#F2F9F8"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
          borderRadius="65px"
          maxW="1200px"
          width={{ base: "calc(100% - 40px)", md: "calc(100% - 80px)" }}
          h={{ base: "300px", md: "461px" }}
          display="flex"
          justifyContent="center"
          className="whiteFooterBox"
          data-aos="fade-up" 
        >
          <Image
            src={picture1}
            pos="absolute"
            top={{ base: "-10px", md: "auto" }}
            left="0"
            w={{ base: "80px", md: "auto" }}
            h={{ base: "80px", md: "auto" }}
          />
          <Image
            src={picture2}
            pos="absolute"
            top={{ base: "-30px", md: "auto" }}
            right={{ base: "150px", md: "auto" }}
            w={{ base: "80px", md: "auto" }}
            h={{ base: "80px", md: "auto" }}
          />
          <Image
            src={picture3}
            pos="absolute"
            top={{ base: "-15px", md: "auto" }}
            right={{ base: "40px", md: "55px" }}
            w={{ base: "80px", md: "auto" }}
            h={{ base: "80px", md: "auto" }}
          />
          <Image
            src={picture4}
            pos="absolute"
            bottom={{ base: "-23px", md: "0" }}
            right={{ base: "220px", md: "236px" }}
            w={{ base: "80px", md: "auto" }}
            h={{ base: "80px", md: "auto" }}
          />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="50px"
          >
            <Box>
              {/* Logo'ya Link ekledim */}
              <Link to="/">
                <Image src={logo} alt="logo" w="350px" />
              </Link>
            </Box>
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
              textAlign="center"
              textColor="#78BAB5"
              fontSize={{ base: "12px", md: "14px" }}
              mt={{ base: "100px", md:"230px" }}
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
