import axios from "axios";
import { useEffect, useState } from "react";

export const useMenData = () => {
  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    const fetchMenClothing = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setMenClothing(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenClothing();
  }, []);

  return { menClothing };
};
