import React from "react";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import { Jewelry } from "./pages/Jewelry";
import { MenClothes } from "./pages/MenClothes";
import { Electronics } from "./pages/Electronics";
import { WomenClothes } from "./pages/WomenClothes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleProduct } from "./pages/SingleProduct";
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
