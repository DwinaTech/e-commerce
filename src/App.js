import React from "react";
import Home from "./components/Home";
import Chart from "./components/Chart";
import { Jewelry } from "./components/Jewelry";
import { MenClothes } from "./components/MenClothes";
import { Electronics } from "./components/Electronics";
import { WomenClothes } from "./components/WomenClothes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleProduct } from "./components/SingleProduct";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chart" element={<Chart />} />
          <Route path="jewelry" element={<Jewelry />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="men-clothing" element={<MenClothes />} />
          <Route path="women-clothing" element={<WomenClothes />} />
          <Route path="single-product/:id" element={<SingleProduct />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
