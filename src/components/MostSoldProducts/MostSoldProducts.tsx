import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ProductItem } from "interfaces/Product";
import useSWR from "swr";
import api from "../../services/api";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const MostSoldProducts = () => {
  const { data } = useSWR("/products?sort=desc&limit=3", fetcher);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading my={12}>Produtos mais vendidos</Heading>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        maxH={635}
      >
        {data &&
          data.map((product: ProductItem) => (
            <GridItem key={product.id} p={5} bgColor="#FFF">
              <Center flexDirection="column">
                <Heading
                  variant="h2"
                  fontSize="1.5rem"
                  h="5rem"
                  textAlign="center"
                >
                  {product.title}
                </Heading>
                <Text variant="menu">Price: </Text>
                <Text variant="menu" fontSize="1.6rem" mb={8} mt={2}>
                  ${product.price}
                </Text>
                <Image
                  src={product.image}
                  alt={product.title}
                  objectFit="contain"
                  maxH={250}
                />

                <Button mt={12} size="lg" w={200} colorScheme="teal">
                  Buy Now
                </Button>
              </Center>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default MostSoldProducts;
