import React from "react";
import { Layout } from "../../components/Layout";
import { Grid } from "@mui/material";
import { CustomCard } from "../../components/CustomCard";
import { useElectronics } from "./useElectronics";

export const Electronics = () => {
  const { electronics } = useElectronics();

  return (
    <Layout>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {electronics.length
          ? electronics.map((product) => (
              <Grid item xs={6} sm={4} lg={3} key={product.id}>
                <CustomCard product={product} />
              </Grid>
            ))
          : null}
      </Grid>
    </Layout>
  );
};
