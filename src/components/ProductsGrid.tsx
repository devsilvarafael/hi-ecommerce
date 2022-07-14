import {
  Box,
  Button,
  Center,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { ProductGrid } from "../interfaces/Product";

const ProductsGrid = ({
  productTitle,
  productPrice,
  productImage,
}: ProductGrid) => (
  <GridItem bgColor="#FFF" width="100%" maxW={568} my={4}>
    <Box h={480}>
      <Center flexDirection="column" p={5} height="auto" flex={1}>
        <Heading
          variant="h2"
          fontSize="1.5rem"
          textAlign="center"
          noOfLines={2}
        >
          {productTitle}
        </Heading>
        <Text variant="menu" mt={4}>
          Price:{" "}
        </Text>
        <Text variant="menu" fontSize="1.6rem" mb={8} mt={2}>
          ${productPrice}
        </Text>
        <Image
          src={productImage}
          alt={productTitle}
          objectFit="contain"
          maxH={250}
        />
      </Center>
    </Box>

    <Button mt={10} size="lg" w="100%" colorScheme="teal" borderRadius={0}>
      Buy Now
    </Button>
  </GridItem>
);

export default ProductsGrid;
