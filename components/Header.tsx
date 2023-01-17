import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box textAlign="left" mb={5}>
      <Heading size="lg" fontWeight="medium">
        Today main focus
      </Heading>
      <Heading size="xl">Design team meeting</Heading>
    </Box>
  );
};
