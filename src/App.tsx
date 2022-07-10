import { ChakraProvider } from "@chakra-ui/react";
import TopMenuBar from "@components/Menu/TopMenuBar";
import theme from "@theme/index";
import Home from "@pages/home";

const App = () => (
  <ChakraProvider theme={theme}>
    <TopMenuBar />
    <Home />
  </ChakraProvider>
);

export default App;
