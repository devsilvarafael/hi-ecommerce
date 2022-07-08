/* eslint-disable react/function-component-definition */
import { Box, Menu, MenuButton, Text } from "@chakra-ui/react";

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
      <Menu>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 1
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 2
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 3
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 4
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 5
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebook 6
        </MenuButton>
      </Menu>
    </Box>
  </Box>
);

export default TopMenuBar;
