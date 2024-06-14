import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterSide from '../../../components/FooterSide';
import AOS from 'aos';
import 'aos/dist/aos.css';

import car1 from './imgs/car1.png';
import car2 from './imgs/car2.png';
import car3 from './imgs/car3.png';
import car4 from './imgs/car4.png';
import car5 from './imgs/car5.png';
import car6 from './imgs/car6.png';
import car7 from './imgs/car7.png';
import car8 from './imgs/car8.png';
import car9 from './imgs/car9.png';
import car10 from './imgs/car10.png';
import car11 from './imgs/car11.png';

const imageUrls = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
  car10,
  car11,
];

const texts = [
  'Saray Çikiloo',
  'Keçmişin Dadı',
  'Bakı Süd',
  'Mint Sənaye',
  'Saray Choko Lips',
  'Mint Sənaye',
  'Mint Sənaye',
  'Metro Park Lotoreya',
  'Universal Magmaweld',
  'Selenium',
  'CityMed',
];

function AutoBranding() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (index) => {
    navigate(`/products/auto-branding/${index + 1}`);
  };

  if (id !== undefined) {
    const index = parseInt(id, 10) - 1;

    const handleBackClick = () => {
      navigate('/products/auto-branding');
    };

    return (
      <>
        <Header />
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          m="auto"
          mt="120px"
          p="20px"
          maxW="800px"
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
          borderRadius="md"
        >
          <Button onClick={handleBackClick} mb="20px">
            Geri
          </Button>
          <Image
            src={imageUrls[index]}
            alt={texts[index]}
            boxSize="400px"
            objectFit="contain"
            mb="20px"
          />
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {texts[index]}
          </Text>
        </Box>
        <FooterSide />
      </>
    );
  }

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
          fontSize={{ base: '30px', sm: '40px' }}
          w="100%"
          textAlign="center"
          pb="30px"
        >
          {t('autoBranding')}
        </Text>
        <Box
          className="mainCard"
          display="flex"
          justifyContent="space-evenly"
          mt="50px"
          flexWrap="wrap"
          gap={{ base: '10px', sm: '16px' }}
          pb="50px"
          data-aos="fade"
          data-aos-once="true"
        >
          {imageUrls.map((url, index) => (
            <Box
              key={index}
              className="card"
              w={{ base: '240px', sm: '288px' }}
              h="200px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.1) 0px 6px 24px"
              bg="white"
              borderRadius="md"
              display="flex"
              flexDir="column"
              alignItems="center"
              pos="relative"
              mt={!isMobile ? '100px' : '70px'}
              overflow="visible"
              _hover={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(index)}
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
                _hover={{ transform: 'translateX(-50%) scale(1.1)' }}
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
                  fontSize={{ base: '16px', sm: '18px' }}
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

export default AutoBranding;
