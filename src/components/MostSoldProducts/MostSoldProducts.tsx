import { Box, Grid, Heading } from "@chakra-ui/react";

import React, { Suspense } from "react";

import useFetch from "../../hooks/useFetch";

import { ProductItem } from "../../interfaces/Product";

const MostSoldProducts = () => {
  const ProductsGrid = React.lazy(() => import("../ProductsGrid"));

  const products = useFetch("/products?sort=desc&limit=3");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading my={12}>Produtos de Vestuário mais vendidos</Heading>
      <Suspense fallback={<h2>Loading, be pacient.</h2>}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          width="100%"
          maxH={570}
        >
          {products &&
            products.map((product: ProductItem) => (
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

export default MostSoldProducts;
