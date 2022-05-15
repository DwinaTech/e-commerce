import React from "react";
import Home from "./components/Home";
import Chart from "./components/Chart";
import { Jewelry } from "./components/Jewelry";
import { MenClothes } from "./components/MenClothes";
import { Electronics } from "./components/Electronics";
import { WomenClothes } from "./components/WomenClothes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chart" element={<Chart />} />
        <Route path="jewelry" element={<Jewelry />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="men-clothing" element={<MenClothes />} />
        <Route path="women-clothing" element={<WomenClothes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
