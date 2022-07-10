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
          Computadores
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Notebooks
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Acessórios
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Monitores
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Periféricos
        </MenuButton>
        <MenuButton as={Text} variant="subtitle1">
          Licenças
        </MenuButton>
      </Menu>
    </Box>
  </Box>
);

export default TopMenuBar;
