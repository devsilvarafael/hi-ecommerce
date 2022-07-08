import { extendTheme } from "@chakra-ui/react";
import ChakraHeading from "./ChakraHeading";
import ChakraText from "./ChakraText";

const components = extendTheme({
  components: {
    Text: ChakraText,
    Heading: ChakraHeading,
  },
});

export default components;
