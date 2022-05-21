import React from "react";
import { Grid } from "@mui/material";
import { SingleProCard } from "./SingleProCard";
import { Layout } from "../../components/Layout";
import { useSingleProduct } from "./useSingleProduct";

export const SingleProduct = () => {
  const {
    image,
    loading,
    product,
    selectedSize,
    updateCurrentSize,
    updateCurrentImage,
  } = useSingleProduct();
  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item sm={10}>
          {loading ? (
            <h4>...loading</h4>
          ) : (
            <SingleProCard
              image={image}
              product={product}
              selectedSize={selectedSize}
              updateCurrentSize={updateCurrentSize}
              updateCurrentImage={updateCurrentImage}
            />
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};
