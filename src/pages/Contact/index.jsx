import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import FooterSide from "../../components/FooterSide";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Button,
  useToast,
  Flex, // Flex bileşenini import et
  Icon, // Icon bileşenini import et
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const isFirstNameError = firstName === "";
  const isLastNameError = lastName === "";
  const isEmailError = email === "";
  const isMessageError = message === "";

  useEffect(() => {
    if (
      !isFirstNameError &&
      !isLastNameError &&
      !isEmailError &&
      !isMessageError
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [firstName, lastName, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isFormValid) {
      console.log("Form submitted:", { firstName, lastName, email, message });
      toast({
        title: "Form submitted successfully.",
        description:
          "You have successfully contacted us. We will get back to you via email shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        onCloseComplete: () => {
          navigate("/");
        },
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <Header />
      <Box
        maxW="1200px"
        w="100%"
        display="flex"
        flexDirection="column"
        m="auto"
        p="20px"
      >
        <Text
          textColor="#384250"
          w="100%"
          textAlign="center"
          fontWeight="bold"
          fontSize="36px"
          mt="50px"
        >
          Contact Us Form
        </Text>
        <Box as="form" mt="20px" onSubmit={handleSubmit}>
          <FormControl
            isInvalid={isSubmitted && isFirstNameError}
            isRequired
            mb="20px"
          >
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {isSubmitted && isFirstNameError && (
              <FormErrorMessage>First name is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={isSubmitted && isLastNameError}
            isRequired
            mb="20px"
          >
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {isSubmitted && isLastNameError && (
              <FormErrorMessage>Last name is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={isSubmitted && isEmailError}
            isRequired
            mb="20px"
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isSubmitted && !isEmailError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              isSubmitted &&
              isEmailError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )
            )}
          </FormControl>

          <FormControl
            isInvalid={isSubmitted && isMessageError}
            isRequired
            mb="20px"
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {isSubmitted && isMessageError && (
              <FormErrorMessage>Message is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button colorScheme="teal" type="submit" isDisabled={!isFormValid}>
            Submit
          </Button>

          <Text mt="20px" fontWeight="bold">
            Contact Informations:
          </Text>
          <Flex alignItems="center" mb="10px">
            <Icon as={FaEnvelope} mr="5px" />
            <a href="mailto:info@proshop.az">
              <Text _hover={{ textColor: "teal", cursor: "pointer" }}>
                info@proshop.az
              </Text>
            </a>
          </Flex>
          <Flex alignItems="center" mb="10px">
            <Icon as={FaInstagram} mr="5px" />
            <a href="https://www.instagram.com/proshop.az/" target="blank">
              <Text _hover={{ textColor: "teal" }}>@proshop.az</Text>
            </a>
          </Flex>
          <Flex alignItems="center" mb="10px">
            <Icon as={FaLinkedin} mr="5px" />
            <a
              href="https://www.linkedin.com/company/proshop-azerbaijan/"
              target="blank"
            >
              <Text _hover={{ textColor: "teal" }}>
                https://www.linkedin.com/company/proshop-azerbaijan/
              </Text>
            </a>
          </Flex>
          <Flex alignItems="center" mb="10px">
            <Icon as={FaPhoneAlt} mr="5px" />
            <a href="tel:+994509709996">
              <Text _hover={{ textColor: "teal" }}>+994 50 970 99 96</Text>
            </a>
          </Flex>
          <Flex alignItems="center" mb="10px"></Flex>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d759.4785552869035!2d49.8600493285276!3d40.41075101934726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzM4LjciTiA0OcKwNTEnMzguNSJF!5e0!3m2!1saz!2saz!4v1717749298544!5m2!1saz!2saz"
            title="Google Map"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <Flex alignItems="center" mb="10px"></Flex>
        </Box>
      </Box>
      <FooterSide />
    </>
  );
}

export default Contact;
