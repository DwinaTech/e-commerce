import * as React from "react";
import { useHome } from "./useHome";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Layout } from "../../components/Layout";
import { PRODUCTS } from "../../queries/products";
import { CustomCard } from "../../components/CustomCard";
import { useSingleProduct } from "../SingleProduct/useSingleProduct";

const Home = () => {
  const { dataFlattener } = useHome();
  const { navigateToProductPage } = useSingleProduct();

  const { loading, data } = useQuery(PRODUCTS);

  if (loading) return <h4>...loading</h4>;
  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {dataFlattener(data).map((product) => (
          <Grid item xs={6} sm={4} lg={3} key={product.id}>
            <CustomCard
              product={product}
              navigateToProductPage={navigateToProductPage}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
