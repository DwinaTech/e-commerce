import React from "react";
import { Layout } from "../../components/Layout";
import { Grid } from "@mui/material";
import { CustomCard } from "../../components/CustomCard";
import { useWomenData } from "./useWomenData";

export const WomenClothes = () => {
  const { womenClothing } = useWomenData();
  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {womenClothing.length
          ? womenClothing.map((product) => (
              <Grid item xs={6} sm={4} lg={3} key={product.id}>
                <CustomCard product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};
