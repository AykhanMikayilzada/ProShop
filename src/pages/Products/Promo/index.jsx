import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterSide from '../../../components/FooterSide';
import AOS from 'aos';
import 'aos/dist/aos.css';

import promo1 from './imgs/promo1.png';
import promo3 from './imgs/promo3.png';
import promo4 from './imgs/promo4.png';
import promo5 from './imgs/promo5.png';
import promo6 from './imgs/promo6.png';
import promo8 from './imgs/promo8.png';
import promo9 from './imgs/promo9.png';
import promo10 from './imgs/promo10.png';
import promo12 from './imgs/promo12.png';
import promo13 from './imgs/promo13.png';
import promo14 from './imgs/promo14.png';
import promo15 from './imgs/promo15.png';

const imageUrls = [
  promo1,
  promo3,
  promo4,
  promo5,
  promo6,
  promo8,
  promo9,
  promo10,
  promo12,
  promo13,
  promo14,
  promo15,
];

const texts = [
  'Qapı Lövhəsi',
  'Papaq',
  'Stəkan Altlığı',
  'Not Dəftəri',
  'Powerbank',
  'Qələm',
  'Özəl Qutu',
  'Termos',
  'Dəftər Qələm',
  'Kətan Çanta',
  'Qələm',
  'Kətan Çanta',
];

function Promo() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
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
    navigate(`/products/promo/${index + 1}`);
  };

  if (id !== undefined) {
    const index = parseInt(id, 10) - 1;

    const handleBackClick = () => {
      navigate('/products/promo');
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
        className="Promo"
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
          {t('promo')}
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

export default Promo;
