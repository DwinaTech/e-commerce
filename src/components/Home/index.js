import { Grid } from "@mui/material";
import * as React from "react";
import { CustomCard } from "../CustomCard";
import { Layout } from "../Layout";
import { useHome } from "./useHome";

const Home = () => {
  const { products } = useHome();

  return (
    <Layout>
      <Grid container spacing={2}>
        {products.length
          ? products.map((product) => (
              <Grid item xs={6} sm={4} lg={3} key={product.id}>
                <CustomCard product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};

export default Home;
