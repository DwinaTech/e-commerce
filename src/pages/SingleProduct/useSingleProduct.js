import React from "react";
import { useParams } from "react-router-dom";

export const useSingleProduct = () => {
  const { name } = useParams();
  console.log({ name });
  const navigateToProductPage = (id) => {
    console.log({ id });
  };
  return { navigateToProductPage };
};
