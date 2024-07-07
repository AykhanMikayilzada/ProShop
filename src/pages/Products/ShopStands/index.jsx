import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import FooterSide from "../../../components/FooterSide";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../utils/firebase";
import AOS from "aos";
import "aos/dist/aos.css";

function ShopStands() {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

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
      try {
        const folder = "ShopingStands";
        const storageRef = ref(storage, folder);
        const result = await listAll(storageRef);
        const urlPromises = result.items.map((imageRef) =>
          getDownloadURL(imageRef)
        );
        const urls = await Promise.all(urlPromises);
        setImages(urls);

        const textPromises = result.items.map((item) => {
          const name = item.name;
          const nameWithoutExtension = name.substring(0, name.lastIndexOf('.'));
          return nameWithoutExtension;
        });
        setTexts(textPromises);
      } catch (error) {
        console.error("Error fetching images from Firebase:", error);
      } finally {
        setIsLoading(false);
      }
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
        className="ShopStands"
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
          {t("shopStands")}
        </Text>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        ) : (
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
            {images.map((url, index) => (
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
                data-aos="fade"
                data-aos-once="true"
                onClick={() => handleImageClick(url)}
                cursor="pointer"
              >
                <Image
                  src={url}
                  pos="absolute"
                  top="-70px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="auto"
                  h="140px"
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
                    {texts[index]}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        )}
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

export default ShopStands;
