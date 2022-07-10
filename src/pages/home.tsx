import { Box } from "@chakra-ui/react";
import MostSoldProducts from "@components/MostSoldProducts/MostSoldProducts";

const Home = () => (
  <Box
    display="flex"
    w="100%"
    flexDirection="column"
    alignItems="center"
    mt="3rem"
  >
    <MostSoldProducts />
  </Box>
);

export default Home;
