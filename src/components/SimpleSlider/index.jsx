import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Image, Box, Heading, Text } from "@chakra-ui/react";
import img2 from "../Header/imgs/proshoplogo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SimpleSlider = () => {
  const imageStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, #008475, #F46036)",
    borderRadius: "8px",
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <Box
          style={imageStyle}
          display="flex"
          justifyContent="space-evenly"
          gap="300px"
        >
          <Box display="flex" flexDirection="column" h="500px">
            <Heading
              mt="114px"
              textColor="white"
              textAlign="start"
              fontSize="44px"
            >
              Heading
            </Heading>
            <Text
              fontSize="18px"
              textAlign="start"
              mt="10px"
              textColor="white"
              maxW="350px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              cumque fugit nobis sint nulla provident inventore nisi commodi
              incidunt, architecto ea minima, et soluta natus! Consequuntur
              alias blanditiis asperiores odit?
            </Text>
          </Box>
          <Image src={img2} alt="Image 1" maxW="500px" mr="60px" />
        </Box>
      </div>
      <div>
        <Box
          style={imageStyle}
          display="flex"
          justifyContent="space-evenly"
          gap="300px"
        >
          <Box display="flex" flexDirection="column" h="500px">
            <Heading
              mt="114px"
              textColor="white"
              textAlign="start"
              fontSize="44px"
            >
              Heading
            </Heading>
            <Text
              fontSize="18px"
              textAlign="start"
              mt="10px"
              textColor="white"
              maxW="350px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              cumque fugit nobis sint nulla provident inventore nisi commodi
              incidunt, architecto ea minima, et soluta natus! Consequuntur
              alias blanditiis asperiores odit?
            </Text>
          </Box>
          <Image src={img2} alt="Image 1" maxW="500px" mr="60px" />
        </Box>
      </div>
      <div>
        <Box
          style={imageStyle}
          display="flex"
          justifyContent="space-evenly"
          gap="300px"
        >
          <Box display="flex" flexDirection="column" h="500px">
            <Heading
              mt="114px"
              textColor="white"
              textAlign="start"
              fontSize="44px"
            >
              Heading
            </Heading>
            <Text
              fontSize="18px"
              textAlign="start"
              mt="10px"
              textColor="white"
              maxW="350px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              cumque fugit nobis sint nulla provident inventore nisi commodi
              incidunt, architecto ea minima, et soluta natus! Consequuntur
              alias blanditiis asperiores odit?
            </Text>
          </Box>
          <Image src={img2} alt="Image 1" maxW="500px" mr="60px" />
        </Box>
      </div>
    </Carousel>
  );
};

export default SimpleSlider;
