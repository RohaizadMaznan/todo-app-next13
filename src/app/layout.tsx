"use client";

import React from "react";

import "./globals.css";
import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import theme from "theme";
import "react-datepicker/dist/react-datepicker.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <Box
            bg={useColorModeValue("#987EFF", "gray.700")}
            h="100vh"
            w="full"
            color="white">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
