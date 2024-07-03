import React, { useEffect, useState } from "react";
import { Box, Image, Spinner } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/Header";
import FooterSide from "../../../components/FooterSide";
import { storage } from "../../../utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function AllProducts() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Fetch images from Firebase Storage
    const fetchImages = async () => {
      const folders = [
        "AutoBranding",
        "Bilboards",
        "Events",
        "Indoor",
        "Outdoor",
        "Polgraphy",
        "Promo",
        "ShopingStands",
      ];

      const imagePromises = folders.map(async (folder) => {
        const storageRef = ref(storage, folder);
        const result = await listAll(storageRef);
        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
        return await Promise.all(urlPromises);
      });

      const imageArrays = await Promise.all(imagePromises);
      const urls = imageArrays.flat();
      setImages(urls);
      setLoading(false);
    };

    fetchImages();
  }, []);

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
          {loading ? (
            <Spinner size="xl" />
          ) : (
            images.map((url, index) => (
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
              </Box>
            ))
          )}
        </Box>
      </Box>
      <FooterSide />
    </>
  );
}

export default AllProducts;
