import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import logo1 from "./imgs/alpine.png";
import logo2 from "./imgs/asMotors.png";
import logo3 from "./imgs/biomed.png";
import logo4 from "./imgs/bioMio.png";
import logo5 from "./imgs/cheetos.png";
import logo6 from "./imgs/colgate.png";
import logo7 from "./imgs/doritos.png";
import logo8 from "./imgs/dubaiChamber.png";
import logo9 from "./imgs/eco.png";
import logo10 from "./imgs/embassy.png";
import logo11 from "./imgs/emporium.png";
import logo12 from "./imgs/intend.png";
import logo13 from "./imgs/lays.png";
import logo14 from "./imgs/pepsico.png";
import logo15 from "./imgs/solomed.png";
import logo16 from "./imgs/splat.png";
import logo17 from "./imgs/unimac.png";
import logo18 from "./imgs/veyselOglu.png";
import logo19 from "./imgs/worldHealthy.png";
import logo20 from "./imgs/xpycTeam.png";

function PartnerLogos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box maxW="1200px" m="auto" mb="48px" overflow="hidden">
      <Slider {...settings}>
        {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20].map((logo, index) => (
          <Box 
            key={index} 
            p={{ base: "10px", md: "15px" }} 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="150px" 
            >
            <Image src={logo} alt={`Partner ${index + 1}`} m="auto" w={{ base: "120px", md: "150px" }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PartnerLogos;
