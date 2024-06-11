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
  };

  return (
    <Box maxW="1200px" m="auto" mb="48px">
      <Slider {...settings}>
        <Box>
          <Image src={logo1} alt="Partner 1" w="100px"/>
        </Box>
        <Box>
          <Image src={logo2} alt="Partner 2" w="100px"/>
        </Box>
        <Box>
          <Image src={logo3} alt="Partner 3" w="100px"/>
        </Box>
        <Box>
          <Image src={logo4} alt="Partner 4" w="100px"/>
        </Box>
        <Box>
          <Image src={logo5} alt="Partner 5" w="100px"/>
        </Box>
        <Box>
          <Image src={logo6} alt="Partner 6" w="100px"/>
        </Box>
        <Box>
          <Image src={logo7} alt="Partner 7" w="100px"/>
        </Box>
        <Box>
          <Image src={logo8} alt="Partner 8" w="100px"/>
        </Box>
        <Box>
          <Image src={logo9} alt="Partner 9" w="100px"/>
        </Box>
        <Box>
          <Image src={logo10} alt="Partner 10" w="100px"/>
        </Box>
        <Box>
          <Image src={logo11} alt="Partner 11" w="100px"/>
        </Box>
        <Box>
          <Image src={logo12} alt="Partner 12" w="100px"/>
        </Box>
        <Box>
          <Image src={logo13} alt="Partner 13" w="100px"/>
        </Box>
        <Box>
          <Image src={logo14} alt="Partner 14" w="100px"/>
        </Box>
        <Box>
          <Image src={logo15} alt="Partner 15" w="100px"/>
        </Box>
        <Box>
          <Image src={logo16} alt="Partner 16" w="100px"/>
        </Box>
        <Box>
          <Image src={logo17} alt="Partner 17" w="100px"/>
        </Box>
        <Box>
          <Image src={logo18} alt="Partner 18" w="100px"/>
        </Box>
        <Box>
          <Image src={logo19} alt="Partner 19" w="100px"/>
        </Box>
        <Box>
          <Image src={logo20} alt="Partner 20" w="100px"/>
        </Box>
      </Slider>
    </Box>
  );
}

export default PartnerLogos;
