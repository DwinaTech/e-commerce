import { Grid } from "@mui/material";
import * as React from "react";
import { CustomCard } from "../CustomCard";
import { Layout } from "../Layout";
import { useHome } from "./useHome";

const Home = () => {
  const { products } = useHome();

  if (!products.length) return;
  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} lg={3} key={product.id}>
            <CustomCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
