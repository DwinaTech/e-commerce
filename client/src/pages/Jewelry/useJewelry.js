import axios from "axios";
import { useEffect, useState } from "react";

export const useJewelry = () => {
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    const fetchJewelries = async () => {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        setJewelries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJewelries();
  }, []);

  return { jewelries };
};
