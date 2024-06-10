import React, { useEffect, useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/Header';
import FooterSide from '../../../components/FooterSide';

function Polgraphy() {
  const { t } = useTranslation(); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl =
    'https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg';
  const texts = [
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
    'Fresh Avocados',
  ];

  return (
    <>
      <Header />
      <Box
        className="Polgraphy"
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
          {t('polgraphy')} 
        </Text>
        <Box
          className="mainCard"
          display="flex"
          justifyContent="space-evenly"
          mt="50px"
          flexWrap="wrap"
          gap={{ base: '10px', sm: '16px' }}
          pb="50px"
        >
          {texts.map((text, index) => (
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
            >
              <Image
                src={imageUrl}
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
                  {text}
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

export default Polgraphy;
