import React from "react";
import { Button, Flex, Grid, Heading, Link, Text } from "@chakra-ui/core";

import Divider from "../components/Divider";
import Input from "../components/Input";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <Link href="https://chakra-ui.com/" target="_blank">
          <img src="/chakra.svg" alt="Chakra" width="210" />
        </Link>

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          A simple POC of Declarative UI with Chakra ⚡️
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input placeholder="E-mail" />
        <Input marginTop={2} placeholder="Password" type="password" />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="teal.500"
          fontWeight="bold"
          _hover={{ color: "teal.300" }}
        >
          Forgot my password
        </Link>

        <Button
          backgroundColor="teal.300"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: "teal.500" }}
        >
          LOGIN
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Don't have an account?{" "}
          <Link
            color="teal.500"
            fontWeight="bold"
            _hover={{ color: "teal.300" }}
          >
            Register
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Or sign in with</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.500"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: "teal.300" }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
