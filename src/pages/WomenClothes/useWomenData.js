import axios from "axios";
import { useEffect, useState } from "react";

export const useWomenData = () => {
  const [womenClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    const fetchWomenClothing = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        );
        setWomenClothing(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWomenClothing();
  }, []);

  return { womenClothing };
};
