import { Box, Grid, Heading } from "@chakra-ui/react";
import { ProductItem } from "interfaces/Product";
import React, { Suspense } from "react";
import useFetch from "../../hooks/useFetch";

const MostSoldEletronics = () => {
  const ProductsGrid = React.lazy(() => import("../ProductsGrid"));

  const eletronics = useFetch("/products/category/electronics");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading my={12}>Produtos Eletronicos</Heading>
      <Suspense fallback={<h2>Loading eletronics</h2>}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          maxH={635}
          width="100%"
        >
          {eletronics &&
            eletronics.map((product: ProductItem) => (
              <ProductsGrid
                key={product.id}
                productTitle={product.title}
                productPrice={product.price}
                productImage={product.image}
              />
            ))}
        </Grid>
      </Suspense>
    </Box>
  );
};

export default MostSoldEletronics;
