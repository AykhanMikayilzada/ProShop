import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image, Box } from "@chakra-ui/react"; 
import img1 from "../Header/imgs/main.svg";
import img2 from "../Header/imgs/proshoplogo.svg";
import img3 from "../Header/imgs/main.svg";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SimpleSlider = () => {
  const imageStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, #008475, #F46036)',
    borderRadius: '8px',
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
        <Box style={imageStyle}>
          <Image src={img1} alt="Image 1" pos="absolute" right="0" />
        </Box>
      </div>
      <div>
        <Box style={imageStyle}>
          <Image src={img2} alt="Image 2" />
        </Box>
      </div>
      <div>
        <Box style={imageStyle}>
          <Image src={img3} alt="Image 3" />
        </Box>
      </div>
    </Carousel>
  );
}

export default SimpleSlider;
