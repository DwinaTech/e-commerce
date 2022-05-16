import React from "react";
import { Layout } from "../Layout";
import { Grid } from "@mui/material";
import { useMenData } from "./useMenData";
import { CustomCard } from "../CustomCard";

export const MenClothes = () => {
  const { menClothing } = useMenData();

  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {menClothing.length
          ? menClothing.map((product) => (
              <Grid item xs={6} sm={4} lg={3} key={product.id}>
                <CustomCard product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};
