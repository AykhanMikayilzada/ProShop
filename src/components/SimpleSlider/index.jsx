import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { Image, Box, Heading, Text } from "@chakra-ui/react";
import img2 from "../Header/imgs/proshoplogo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SimpleSlider = () => {
  const imageStyle = {
    position: "relative",
    width: "100%",
    height: "600px",
    background: "linear-gradient(to right, #008080,  #C0C0C0)",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const [isSmallerThanTablet] = useMediaQuery("(max-width: 740px)");
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  useEffect(() => {
    if (isSmallerThanTablet) {
      setIsHeadingVisible(false);
    } else {
      setIsHeadingVisible(true);
    }
  }, [isSmallerThanTablet]);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      <Box style={imageStyle} h={{ base: "500px", sm: "auto" }}>
        <Box display="flex" flexDirection="column">
          {isHeadingVisible && (
            <Heading textColor="white" textAlign="start" fontSize="44px">
              Heading
            </Heading>
          )}
          <Text
            fontSize="18px"
            textAlign="start"
            mt="10px"
            textColor="white"
            maxW="350px"
            display={isHeadingVisible ? "block" : "none"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            cumque fugit nobis sint nulla provident inventore nisi commodi
            incidunt, architecto ea minima, et soluta natus! Consequuntur alias
            blanditiis asperiores odit?
          </Text>
        </Box>
        <Image
          src={img2}
          alt="Image 1"
          maxW={{ base: "100%", sm: "500px" }}
          mr={{ base: "0px", sm: "0px" }}
        />
      </Box>
      <Box style={imageStyle} h={{ base: "500px", sm: "auto" }}>
        <Box display="flex" flexDirection="column">
          {isHeadingVisible && (
            <Heading textColor="white" textAlign="start" fontSize="44px">
              Heading
            </Heading>
          )}
          <Text
            fontSize="18px"
            textAlign="start"
            mt="10px"
            textColor="white"
            maxW="350px"
            display={isHeadingVisible ? "block" : "none"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            cumque fugit nobis sint nulla provident inventore nisi commodi
            incidunt, architecto ea minima, et soluta natus! Consequuntur alias
            blanditiis asperiores odit?
          </Text>
        </Box>
        <Image
          src={img2}
          alt="Image 1"
          maxW={{ base: "100%", sm: "500px" }}
          mr={{ base: "0px", sm: "0px" }}
        />
      </Box>
      <Box style={imageStyle} h={{ base: "500px", sm: "auto" }}>
        <Box display="flex" flexDirection="column">
          {isHeadingVisible && (
            <Heading textColor="white" textAlign="start" fontSize="44px">
              Heading
            </Heading>
          )}
          <Text
            fontSize="18px"
            textAlign="start"
            mt="10px"
            textColor="white"
            maxW="350px"
            display={isHeadingVisible ? "block" : "none"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            cumque fugit nobis sint nulla provident inventore nisi commodi
            incidunt, architecto ea minima, et soluta natus! Consequuntur alias
            blanditiis asperiores odit?
          </Text>
        </Box>
        <Image
          src={img2}
          alt="Image 1"
          maxW={{ base: "100%", sm: "500px" }}
          mr={{ base: "0px", sm: "0px" }}
        />
      </Box>
    </Carousel>
  );
};

export default SimpleSlider;
