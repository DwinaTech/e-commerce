import { Grid } from "@mui/material";
import React from "react";
import { CustomCard } from "../CustomCard";
import { Layout } from "../Layout";
import { useJewelry } from "./useJewelry";

export const Jewelry = () => {
  const { jewelries } = useJewelry();

  if (!jewelries.length) return;
  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {jewelries.map((product) => (
          <Grid item xs={6} sm={4} lg={3} key={product.id}>
            <CustomCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
