import React from 'react'
import Header from "../../components/Header"
import FooterSide from "../../components/FooterSide"
import { Box, Image, Heading } from '@chakra-ui/react'
import gif404 from "./imgs/404.gif"

function Page404() {
  return (
    <>
        <Box display="flex" justifyContent="center" alignItems="center" w="100%" pos="relative">
            <Image src={gif404} pos="absolute" w="800px" mt="300px"/>
            <Heading pos="absolute" top="350" textAlign="center">PAGE <br/>NOT FOUND!</Heading>
        </Box>
    </>
  )
}

export default Page404