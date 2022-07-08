import { ChakraProvider, Heading } from "@chakra-ui/react";
import theme from "./theme/index";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading variant="h1">Testing Title</Heading>
    </ChakraProvider>
  );
}

export default App;
