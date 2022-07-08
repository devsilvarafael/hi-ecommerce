import { ChakraProvider, Heading } from "@chakra-ui/react";
import TopMenuBar from "@components/Menu/TopMenuBar";
import theme from "@theme/index";

const App = () => (
  <ChakraProvider theme={theme}>
    <TopMenuBar />
    <Heading variant="h1">Testing Title</Heading>
  </ChakraProvider>
);

export default App;
