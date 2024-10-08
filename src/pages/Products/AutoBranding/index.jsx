import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import FooterSide from "../../../components/FooterSide";
import AOS from "aos";
import "aos/dist/aos.css";
import { storage } from "../../../utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function AutoBranding() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const { t } = useTranslation(); // Destructure t function for translations

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
    const fetchImages = async () => {
      const folder = "AutoBranding";

      const storageRef = ref(storage, folder);
      const result = await listAll(storageRef);
      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      const urls = await Promise.all(urlPromises);
      setImages(urls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
    onOpen();
  };

  return (
    <>
      <Header />
      <Box
        className="autoBranding"
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
          {t("autoBranding")}
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
                onClick={() => handleImageClick(url)}
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
                    textAlign="center"
                    fontSize={{ base: "16px", sm: "18px" }}
                  >
                    {t(url.split("/").pop().split(".")[0])}
                  </Text>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <FooterSide />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("imageReview")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} w="100%" h="auto" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AutoBranding;
