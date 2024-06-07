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
} from "@chakra-ui/react";

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
    if (!isFirstNameError && !isLastNameError && !isEmailError && !isMessageError) {
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
        description: "You have successfully contacted us. We will get back to you via email shortly.",
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
        </Box>
      </Box>
      <FooterSide />
    </>
  );
}

export default Contact;
