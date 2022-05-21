import { Grid } from "@mui/material";
import React from "react";
import { CustomCard } from "../../components/CustomCard";
import { Layout } from "../../components/Layout";
import { useJewelry } from "./useJewelry";

export const Jewelry = () => {
  const { jewelries } = useJewelry();

  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {jewelries.length
          ? jewelries.map((product) => (
              <Grid item xs={6} sm={4} lg={3} key={product.id}>
                <CustomCard product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};
