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
import useRequests from "../../hooks/useRequests";
import { ProductItem } from "../../interfaces/Product";

const MostSoldProducts = () => {
  const products = useRequests("/products?sort=desc&limit=3");

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
        width="100%"
      >
        {products &&
          products.map((product: ProductItem) => (
            <GridItem key={product.id} bgColor="#FFF" width="100%">
              <Center flexDirection="column" p={5}>
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
              </Center>
              <Button
                mt={12}
                size="lg"
                w="100%"
                colorScheme="teal"
                borderRadius={0}
              >
                Buy Now
              </Button>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default MostSoldProducts;
