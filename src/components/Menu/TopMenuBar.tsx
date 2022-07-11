/* eslint-disable react/function-component-definition */
import { Box, Text } from "@chakra-ui/react";
import CategoryMenuItems from "./CategoryMenuItems";

const TopMenuBar = () => (
  <Box
    w="100%"
    minH={10}
    bg="teal.900"
    color="background.light"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      maxW={900}
      alignItems="center"
    >
      <Text variant="menu">Hi! </Text>
      <CategoryMenuItems />
    </Box>
  </Box>
);

export default TopMenuBar;
