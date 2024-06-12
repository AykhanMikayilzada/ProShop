import React, { useEffect, useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/Header";
import FooterSide from "../../../components/FooterSide";

//Auto Branding
import car1 from "../AutoBranding/imgs/car1.png";
import car2 from "../AutoBranding/imgs/car2.png";
import car3 from "../AutoBranding/imgs/car3.png";
import car4 from "../AutoBranding/imgs/car4.png";
import car5 from "../AutoBranding/imgs/car5.png";
import car6 from "../AutoBranding/imgs/car6.png";
import car7 from "../AutoBranding/imgs/car7.png";
import car8 from "../AutoBranding/imgs/car8.png";
import car9 from "../AutoBranding/imgs/car9.png";
import car10 from "../AutoBranding/imgs/car10.png";
import car11 from "../AutoBranding/imgs/car11.png";

//Promos
import promo1 from "../Promo/imgs/promo1.png";
import promo3 from "../Promo/imgs/promo3.png";
import promo4 from "../Promo/imgs/promo4.png";
import promo5 from "../Promo/imgs/promo5.png";
import promo6 from "../Promo/imgs/promo6.png";
import promo8 from "../Promo/imgs/promo8.png";
import promo9 from "../Promo/imgs/promo9.png";
import promo10 from "../Promo/imgs/promo10.png";
import promo12 from "../Promo/imgs/promo12.png";
import promo13 from "../Promo/imgs/promo13.png";
import promo14 from "../Promo/imgs/promo14.png";
import promo15 from "../Promo/imgs/promo15.png";

//Shop Stands
import shopStand1 from "../ShopStands/imgs/shopStand1.png";
import shopStand2 from "../ShopStands/imgs/shopStand2.png";
import shopStand3 from "../ShopStands/imgs/shopStand3.png";
import polygraph1 from "../Polypraph/imgs/polygraph1.png";
import polygraph2 from "../Polypraph/imgs/polygraph2.png";
import polygraph3 from "../Polypraph/imgs/polygraph3.png";

function AllProducts() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Karışık sıralar
  const imageUrls = [
    promo15,
    polygraph2,
    car6,
    promo3,
    shopStand2,
    car1,
    promo9,
    polygraph3,
    shopStand1,
    car9,
    promo8,
    car8,
    promo12,
    promo4,
    shopStand3,
    promo5,
    car10,
    car2,
    car7,
    promo10,
    car4,
    car11,
    car5,
    car3,
    promo6,
    polygraph1,
    promo1,
    promo14,
    promo13,
  ];

  const texts = [
    "Qələm",
    "Sertifikat",
    "Mint Sənaye",
    "Papaq",
    "Lays Stand",
    "Saray Çikiloo",
    "Qələm",
    "Özəl Medallar",
    "Cheetos Stand",
    "Universal Magmaweld",
    "Qələm",
    "Metro Park Lotoreya",
    "Termos",
    "Stəkan Altlığı",
    "Lays, Doritos, Xpyc Team Stand",
    "Not Dəfrəri",
    "Selenium",
    "Keçmişin Dadı",
    "Mint Sənaye",
    "Özəl Qutu",
    "Mint Sənaye",
    "City Med",
    "Saray Choko Lips",
    "Bakı Süd",
    "Powerbank",
    "Scalis Poliqrafiya",
    "Qapı Lövhəsi",
    "Kətan Çanta",
    "Dəftər Qələm",
    "Kətan Çanta",
  ];

  return (
    <>
      <Header />
      <Box
        className="allProducts"
        display="flex"
        flexDir="column"
        maxW="1200px"
        w="100%"
        alignItems="center"
        m="auto"
        mt="120px"
      >
        <Text
          textColor="black"
          fontWeight="bold"
          fontSize={{ base: "30px", sm: "40px" }}
          w="100%"
          textAlign="center"
          pb="30px"
        >
          {t("allProducts")}
        </Text>
        <Box
          className="mainCard"
          display="flex"
          justifyContent="space-evenly"
          mt="50px"
          flexWrap="wrap"
          gap={{ base: "10px", sm: "16px" }}
          pb="50px"
          data-aos="fade"
          data-aos-once="true"
        >
          {imageUrls.map((url, index) => (
            <Box
              key={index}
              className="card"
              w={{ base: "240px", sm: "288px" }}
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt={!isMobile ? "100px" : "70px"}
              overflow="visible"
              _hover={{ cursor: "pointer" }}
              data-aos="fade"
              data-aos-once="true"
            >
              <Image
                src={url}
                pos="absolute"
                top="-70px"
                left="50%"
                transform="translateX(-50%)"
                w="auto"
                h="140px"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateX(-50%) scale(1.1)" }}
              />
              <Box
                display="flex"
                justifyContent="center"
                mt="100px"
                alignItems="center"
              >
                <Text
                  textColor="black"
                  fontWeight="bold"
                  fontSize={{ base: "16px", sm: "18px" }}
                >
                  {texts[index]}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <FooterSide />
    </>
  );
}

export default AllProducts;
